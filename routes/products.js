const { Router } = require('express');
const { searchProduct } = require('../database/search-product');
const { areValidStrings } = require('../utils/validate-input');

const router = Router();

router.get('/:product',async (req, res) => {
    const product = req.params.product;
    if(!areValidStrings(product)) res.sendStatus(401);
    else {
        await searchProduct(product)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(() => {
            res.sendStatus(500);
        });
    }
});

module.exports = router;