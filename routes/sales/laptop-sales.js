const { Router } = require('express');
const {getLaptopSales} = require('../../database/sales/get-laptop-sales');
const {getNSalesCategory} = require('../../database/sales/get-n-sales-category');

const router = Router();

router.get('', async (req, res) => {
    const { limit, min } = req.query;
    await getLaptopSales(limit, min)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.get('/quantity', async (req, res) => {
    await getNSalesCategory('laptops')
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    })
})

module.exports = router;