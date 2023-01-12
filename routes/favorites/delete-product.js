const { Router } = require('express');
const {deleteWishlistProduct} = require('../../database/delete-wishlist-product');

const router = Router();

router.post('', async (req, res) => {
    const { product } = req.body;
    await deleteWishlistProduct(req.session.sessionID, product)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
})

module.exports = router;