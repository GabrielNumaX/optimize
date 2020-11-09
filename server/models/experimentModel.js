const { Schema, model } = require('mongoose');

const experimentSchema = new Schema({
    // experimentId: this will be Object.Id
    shopifyId: {
        type: Schema.Types.ObjectId, ref: 'Products'
        // here you get the shopify Id from Product object which
        // has the shopify Id
    },
    status: { type: String, enum: ['active', 'inactive']},
    startDate: { type: Date },
    endDate: { type: Date },
    timeSlice: { type: Number },
    ongoing: { type: Boolean },
    variants: [
       {
          //this objects are related to Variants Schema
          type: Schema.Types.ObjectId, ref: 'Variants'
       }
     ],
    currentVariant: { type: Schema.Types.ObjectId, ref: 'Variants' },
     // the variant that is active according to date and time slice
});

module.exports = model('Experiments', experimentSchema);