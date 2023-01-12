const { Router } = require('express');
const {getFavoritesId} = require('../../database/get-favorites-by-id');

const router = Router();

router.get('', async (req, res) => {
    await getFavoritesId(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
});

module.exports = router;