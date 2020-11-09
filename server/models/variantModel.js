const { Schema, model } = require('mongoose');

const variantSchema = new Schema ({
    // variantId: this will be ObjectID
    // shopifyId: { type: Schema.Types.ObjectId, ref: 'Products'},
    shopifyId: { type: String },
    starDate: { type: Number },
	endDate: { type: Number },
    timeSlice: { type: Number },
	status: { type: String, enum: ['active', 'inactive']},
	ongoing: { type: Boolean},
	layouts: [ 
	    {
	    layoutId: { type: Schema.Types.ObjectId },
        productTitle: { type: String },
        description: { type: String },
        price: { type: Number },
    	timeSlice: { type: Number },
	    status: { type: String, enum: ['active', 'inactive']},
	    ongoing: { type: Boolean},
        }
    ]
});

module.exports = model('Variants', variantSchema);