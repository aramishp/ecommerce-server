const { Router } = require('express');
const {getNProductsCategory} = require('../database/get-n-products-category');
const laptopsRoute = require('./categories/laptops');
const memoriesRoute = require('./categories/memories');
const phonesRoute = require('./categories/phones');

const router = Router();

router.use('/laptops', laptopsRoute);
router.use('/phones', phonesRoute);
router.use('/memories', memoriesRoute);

router.get('/quantity', async (req, res) => {
    const { category } = req.query;
    await getNProductsCategory(category)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;