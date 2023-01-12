const { Router } = require('express');
const {getPurchasesProducts} = require('../database/get-purchases-products');

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

module.exports = router;