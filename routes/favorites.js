const { Router } = require('express');
const {getProductsByTable} = require('../database/get-wishlist-products');
const {addProductToWishlist} = require('../database/post-wishlist-product');
const favProducts = require('./favorites/fav-products');
const deleteRoute = require('./favorites/delete-product');

const router = Router();

router.use('/products', favProducts);
router.use('/delete', deleteRoute);

router.get('', async (req, res) => {
    await getProductsByTable(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.post('', async (req, res) => {
    const { product } = req.body;
    await addProductToWishlist(req.session.sessionID, product)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
})

module.exports = router;