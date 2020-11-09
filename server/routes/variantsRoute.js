const { Router} = require('express');
const router = Router();

const {
    postVariant,
} = require('../controllers/variantsController');

router.post('/', postVariant);

module.exports = router;

// When you click on a ‘Submit’ after adding variants (to create a new experiment)

// HTTP Method - ‘POST’

// Endpoint -  ‘/v1/optimizexp/experiments/{uuid}

// Request Body parameters
    
// Product_id
// Number (Id of selected Product)
// layoutCombination[]
// < <DimensionType.Title, String>, <DimensionType.Image, img_path> >
// Start Date
// NIL (Date)
// End Date
// NIL (Date)
// Time Slice
// NIL (Epoch)


