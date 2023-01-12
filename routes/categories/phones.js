const { Router } = require('express');
const {getPhones} = require('../../database/categories-search/phones-search');

const router = Router();

router.get('', async (req, res) => {
    const { limit, min } = req.query;
    await getPhones(limit, min)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;