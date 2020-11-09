const { Schema, model } = require('mongoose');

const variantSchema02 = new Schema ({
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
        productTitle: [
            { 
            prodId: Schema.Types.ObjectId,
            title: String
            },
        ],
        description: [
            { 
            descId: Schema.Types.ObjectId,
            description: String
            },
        ],
        price: [
            { 
            priceId: Schema.Types.ObjectId,
            price: Number
            },
        ],
    	timeSlice: { type: Number },
	    status: { type: String, enum: ['active', 'inactive']},
	    ongoing: { type: Boolean},
        }
    ]
});

module.exports = model('Variants', variantSchema02);






// layouts: [ 
//     {
//     layoutId: UNIQUE-ID,
//        productTitle: [
//         {
//         title-id: UNIQUE
//         title: RED WALLET
//         },
//         {
//         title-id: UNIQUE
//         title: BLACK WALLET
//         }
//                      ]
//     description: [
//         {
//         description-id: UNIQUE
//         description: DESCRIPTION RED 01
//         //HERE WE'D NEED AN ID TO RELATE TO RED WALLET TITLE
//                     },
//         {
//         description-id: UNIQUE
//         description: DESCRIPTION RED 02
//         //HERE WE'D NEED AN ID TO RELATE RED WALLET TO TITLE
//                     }
//          ]
// photo: [
//             {
//     photo-id: UNIQUE
//     photo: red-photo-01
//     //DESCRIPTION ID TO RELATE TO RED WALLET DESCRIPTION
//     //TITLE ID TO RELATE TO RED WALLET TITLE
//             },
//             {
//     photo-id: UNIQUE
//     photo: red-photo-02
//     //DESCRIPTION ID TO RELATE TO RED WALLET DESCRIPTION
//     //TITLE ID TO RELATE TO RED WALLET TITLE
//             }
//             //AND SO ON

//            ]
//     price: { type: Number },
//     timeSlice: { type: Number },
//     status: { type: String, enum: ['active', 'inactive']},
//     ongoing: { type: Boolean},
//     }
// ];