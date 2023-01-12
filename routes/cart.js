const { Router } = require('express');
const {getCartProducts} = require('../database/cart-products');
const {addProductToCart} = require('../database/add-cart-product');

const router = Router();

router.get('', async (req, res) => {
    await getCartProducts(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.post('', async (req, res) => {
    const { product } = req.body;
    await addProductToCart(req.session.sessionID, product)
    .then(() => {
        res.sendStatus(200);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
})

module.exports = router;