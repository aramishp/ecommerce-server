const { Router } = require('express');
const {getHomeProducts} = require('../database/home-products');

const router = Router();

router.get('', async (req, res) => {
    const { limit, min } = req.query;
    await getHomeProducts(min, limit)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;