const fetch = require("isomorphic-fetch");
const dotenv = require("dotenv");
const koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
const { default: graphQLProxy } = require("@shopify/koa-shopify-graphql-proxy");
const { ApiVersion } = require("@shopify/koa-shopify-graphql-proxy");
const mongoose = require("mongoose");

const KoaRouter = require("koa-router");
const {
  receiveWebhook,
  registerWebhook,
} = require("@shopify/koa-shopify-webhooks");

dotenv.config();

const Product = require("./models/product.model");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

// const host = "https://dcc2cad7b781.ngrok.io";
const host = process.env.HOST;

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, MONGO_URI } = process.env;

const router = new KoaRouter();
const server = new koa();

// router.get("/api/products", async (ctx) => {
//   try {
//     ctx.body = {
//       status: "success",
//       data: "data from the public api",
//     };
//   } catch (e) {
//     console.log(e);
//   }
// });

// const productroute = require("./routes/product.route");
// server.use('/api/products', productroute);

// router.get("/api/products", async (ctx) => {
//   console.log("IN the API");
//   console.log(ctx.cookies.get("accessToken"));
//   try {
//     const results = await fetch(
//       `https://${ctx.cookies.get(
//         "shopOrigin"
//       )}/admin/api/unstable/products.json`,
//       {
//         headers: {
//           "X-Shopify-Access-Token": ctx.cookies.get("accessToken"),
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         return json;
//       });
//     ctx.body = {
//       status: "success",
//       data: results,
//     };
//   } catch (err) {
//     console.log("error" + err);
//   }
// });

//routes
router.get("/api/products", async (ctx) => {
  const shopOrigin = ctx.cookies.get("shopOrigin");
  try {
    const products = await Product.find({ shopOrigin });

    ctx.body = {
      status: "success",
      data: products,
    };
  } catch (err) {
    console.log("error" + err);
  }
});

server.use(router.allowedMethods());
server.use(router.routes());

app.prepare().then(() => {
  server.use(session({ secure: true, sameSite: "none" }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        "read_products",
        "write_products",
        "read_content",
        "write_content",
        "read_orders",
        "write_orders",
        "read_checkouts",
        "write_checkouts",
        "write_script_tags",
        "read_script_tags",
      ],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.cookies.set("accessToken", accessToken, {
          httpOnly: false,
          sameSite: "none",
        });

        ctx.cookies.set("shopOrigin", shop, {
          httpOnly: false,
          sameSite: "none",
        });

        const productCreateWebhookRegistration = await registerWebhook({
          address: `${host}/webhooks/products/create`,
          topic: "PRODUCTS_CREATE",
          accessToken,
          shop,
          apiVersion: ApiVersion.October20,
        });

        if (productCreateWebhookRegistration.success) {
          console.log("Successfully registered product create webhook!");
        } else {
          console.log(
            "Failed to register product create webhook",
            registration.result
          );
        }

        const productDeleteWebhookRegistration = await registerWebhook({
          address: `${host}/webhooks/products/delete`,
          topic: "PRODUCTS_DELETE",
          accessToken,
          shop,
          apiVersion: ApiVersion.October20,
        });

        if (productDeleteWebhookRegistration.success) {
          console.log("Successfully registered product delete webhook!");
        } else {
          console.log(
            "Failed to register product delete webhook",
            registration.result
          );
        }

        ctx.redirect("/");
      },
    })
  );

  const webhook = receiveWebhook({ secret: SHOPIFY_API_SECRET_KEY });

  //web-hooks
  router.post("/webhooks/products/create", webhook, async (ctx) => {
    const { payload, domain } = ctx.state.webhook;
    const newProduct = new Product({
      ...payload,
      shopOrigin: domain,
    });

    const savedProduct = await newProduct.save();

    if (savedProduct) {
      console.log("product added successfully in the database");
    }
  });

  router.post("/webhooks/products/delete", webhook, async (ctx) => {
    const { payload, domain } = ctx.state.webhook;

    const deletedProduct = await Product.findOneAndDelete({ id: payload.id });

    if (deletedProduct) {
      console.log("product deleted successfully from the database!");
    }
  });

  server.use(graphQLProxy({ version: ApiVersion.October20 }));
  server.use(verifyRequest());

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  mongoose.connect(
    MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Database Connected");
      }
    }
  );

  server.listen(port, () => console.log(`server running on port ${port}`));
});
