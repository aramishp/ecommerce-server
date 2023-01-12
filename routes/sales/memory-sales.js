const { Router } = require('express');
const {getMemorySales} = require('../../database/sales/get-memory-sales');
const {getNSalesCategory} = require('../../database/sales/get-n-sales-category');

const router = Router();

router.get('', async (req, res) => {
    const { limit, min } = req.query;
    await getMemorySales(limit, min)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.get('/quantity', async (req, res) => {
    await getNSalesCategory('memory')
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    })
})

module.exports = router;