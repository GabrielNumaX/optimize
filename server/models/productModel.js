const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    shopifyId: { type: String },
    variants: [
        {
            type: Schema.Types.ObjectId, ref: 'Variants'
        }
    ]
});

module.exports = model('Products', productSchema);