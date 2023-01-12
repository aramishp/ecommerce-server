const { Router } = require('express');
const {getMemories} = require('../../database/categories-search/memories-search');

const router = Router();

router.get('', async (req, res) => {
    const { limit, min } = req.query;
    await getMemories(limit, min)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;