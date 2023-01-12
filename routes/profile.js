const { Router } = require('express');
const { findUserById } = require('../database/find-user-by-id');

const router = Router();

router.get('', async (req, res) => {
    await findUserById(req.session.sessionID)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

module.exports = router;