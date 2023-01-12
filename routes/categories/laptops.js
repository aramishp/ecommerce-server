const { Router } = require('express');
const {getLaptops} = require('../../database/categories-search/laptops-search');

const router = Router();

router.get('', async (req, res) => {
    const { limit, min } = req.query;
    await getLaptops(limit, min)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;