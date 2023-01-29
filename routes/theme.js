const { Router } = require('express');
const {getTheme, postTheme} = require('../database/get-theme');

const router = Router();

router.get('', async (req, res) => {
    if(!req.session.sessionID) res.sendStatus(200);
    else {
        await getTheme(req.session.sessionID)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(() => {
            res.sendStatus(500);
        });
    }
    
});

router.post('', async (req, res) => {
    const {value} = req.body;
    await postTheme(req.session.sessionID, value)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

module.exports = router;