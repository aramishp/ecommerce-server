const { Router } = require('express');
const {getAllSales} = require('../database/sales/get-all-sales');
const {getNProducts} = require('../database/get-n-products');
const salesLaptopsRoute = require('./sales/laptop-sales');
const salesPhonesRoute = require('./sales/phones-sales');
const salesMemoriesRoute = require('./sales/memory-sales');

const router = Router();

router.use('/laptops', salesLaptopsRoute);
router.use('/phones', salesPhonesRoute);
router.use('/memories', salesMemoriesRoute);

router.get('/quantity', async (req, res) => {
    await getNProducts('sales')
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.get('/all-sales', async (req, res) => {
    await getAllSales()
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;