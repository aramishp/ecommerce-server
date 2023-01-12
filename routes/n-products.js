const { Router } = require('express');
const {getNProducts} = require('../database/get-n-products');

const router = Router();

router.get('', async (req, res) => {
    await getNProducts('products')
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;