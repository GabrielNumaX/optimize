const productModel = require('../models/productModel');
// const variantModel = require('../models/variantModel');

const productsController = {};

productsController.postAllProducts = async (ctx) => {

    const { products } = ctx.request.body;

    // Promise.all(player.map(async (item) => {
    //     await playersModel.findByIdAndRemove(item._id)
    // }))

    

}


module.exports = productsController;

// const productSchema = new Schema({
//     shopifyId: { type: String },
//     variants: [
//         {
//             type: Schema.Types.ObjectId, ref: 'Variants'
//         }
//     ]
// });