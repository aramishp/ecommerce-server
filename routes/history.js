const { Router } = require('express');
const {getHistoryProducts} = require('../database/get-history-products');

const router = Router();

router.get('', async (req, res) => {
    await getHistoryProducts(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;