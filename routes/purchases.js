const { Router } = require('express');
const {getPurchasesProducts, getDeliveredProducts} = require('../database/get-purchases-products');
const {makeOrder} = require('../database/make-order');

const router = Router();

router.get('', async (req, res) => {
    await getPurchasesProducts(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.get('/delivered', async (req, res) => {
    await getDeliveredProducts(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

router.post('', async (req, res) => {
    const {total} = req.body;
    if(!total) res.sendStatus(400);
    else {
        await makeOrder(req.session.sessionID, total)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(() => {
            res.sendStatus(500);
        }); 
    }
})

module.exports = router;