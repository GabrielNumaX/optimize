// import "@babel/polyfill";
require('@babel/polyfill');
// import dotenv from "dotenv";
require('dotenv');
// import "isomorphic-fetch";
require('isomorphic-fetch');
// import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
// const { createShopifyAuth } = require('@shopify/koa-shopify-auth');
//original refactor 
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')

// this is from npm docs
// const shopifyAuth = require('@shopify/koa-shopify-auth')
const { verifyRequest } = require('@shopify/koa-shopify-auth');
// import graphQLProxy, { ApiVersion } from "@shopify/koa-shopify-graphql-proxy";
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
// import Koa from "koa";
const Koa = require('koa');
// import next from "next";
const next = require('next');
// import Router from "koa-router";
const Router = require('koa-router');
// import koaBody from 'koa-body';
const koaBody = require('koa-body');
// import session from "koa-session";
const session = require('koa-session');
// import * as handlers from "./handlers/index";
const handlers = require('./handlers/index');
require('./db/db');

// dotenv.config();

//custom controllers with koa router
const {
  postVariant,
} = require('./controllers/variantsController');

const {
  postAllProducts,
} = require('./controllers/productsController');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();
const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SCOPES } = process.env;


// app.prepare().then(() => {
//   const server = new Koa();
//   const router = new Router();

//   //custom API routes with koa router and custom controllers
//   // router.post('/v1/optimizexp/experiments', postVariant);

//   router.post('/v1/optimizexp/experiments', koaBody(), postVariant);

//   router.post('/v1/optimizexp/products', koaBody(), postAllProducts);

//   // router.post('/v1/optimizexp/experiments', koaBody() ,async (ctx) => {

//   //   console.log(ctx.request.body);
//   //   // => POST body
//   //   ctx.body = JSON.stringify(ctx.request.body);
//   //   // console.log(ctx.request.body);
//   //   console.log('variant post')
//   // });

// //   router.post('/users', koaBody(),
// //   (ctx) => {
// //     console.log(ctx.request.body);
// //     // => POST body
// //     ctx.body = JSON.stringify(ctx.request.body);
// //   }
// // );


//   server.use(
//     session(
//       {
//         sameSite: "none",
//         secure: true,
//       },
//       server
//     )
//   );
//   server.keys = [SHOPIFY_API_SECRET];
//   server.use(
//     createShopifyAuth({
//       apiKey: SHOPIFY_API_KEY,
//       secret: SHOPIFY_API_SECRET,
//       scopes: [SCOPES],
//     // shopifyAuth({
//     //   apiKey: SHOPIFY_API_KEY,
//     //   secret: SHOPIFY_API_SECRET,
//     //   scopes: [SCOPES],

//       async afterAuth(ctx) {
//         //Auth token and shop available in session
//         //Redirect to shop upon auth
//         const { shop, accessToken } = ctx.session;
//         ctx.cookies.set("shopOrigin", shop, {
//           httpOnly: false,
//           secure: true,
//           sameSite: "none",
//         });
//         ctx.redirect("/");
//       },
//     })
//   );
//   server.use(
//     graphQLProxy({
//       version: ApiVersion.October19,
//     })
//   );
//   router.get("(.*)", verifyRequest(), async (ctx) => {
//     await handle(ctx.req, ctx.res);
//     ctx.respond = false;
//     ctx.res.statusCode = 200;
//   });
//   server.use(router.allowedMethods());
//   server.use(router.routes());


//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });


// this is from Himanshu's server -> NO SHOPIFY AUTH for standalone app

const router = new Router();
const server = new Koa();

server.use(router.allowedMethods());
server.use(router.routes());

app.prepare().then(() => {


  router.all('/(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

