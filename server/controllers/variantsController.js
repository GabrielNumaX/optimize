const experimentModel = require('../models/experimentModel');
const variantModel = require('../models/variantModel');

const variantsController = {};

variantsController.postVariant = async (ctx) => {

    const { shopifyId, 
            startDate,
            endDate,
            timeSlice,
            layouts,
        } = ctx.request.body;

    const newVariant = new variantModel({
        shopifyId, 
        startDate,
        endDate,
        timeSlice,
        layouts,
    });

    await newVariant.save();
    
    // Promise.all(player.map(async (item) => {
    //     await playersModel.findByIdAndRemove(item._id)
    // }))
    ctx.response.status = 200;
    ctx.body = newVariant._id;
}

module.exports = variantsController;