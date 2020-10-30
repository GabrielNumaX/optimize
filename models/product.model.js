const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  body_html: { type: String },
  vendor: { type: String },
  product_type: { type: String },
  created_at: { type: Date },
  handle: { type: String },
  updated_at: { type: Date },
  published_at: { type: Date },
  template_suffix: { type: String },
  status: { type: String },
  published_scope: { type: String },
  tags: { type: String },
  admin_graphql_api_id: { type: String },
  variants: { type: Array },
  options: { type: Array },
  images: { type: Array },
  image: { type: Object },
  shopOrigin: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
