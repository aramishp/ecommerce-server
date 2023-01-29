const { Router } = require('express');
const { findUserById } = require('../database/find-user-by-id');
const { updateAddressById } = require('../database/update-address-by-id');
const {updatePhotoById} = require('../database/update-photo-by-id')

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

router.put('/updateaddress', async (req, res) => {
    const { address } = req.body;
    await updateAddressById(req.session.sessionID, address)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

router.put('/updatephoto', async (req, res) => {
    const { photo } = req.body;
    await updatePhotoById(req.session.sessionID, photo)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(() => {
        res.sendStatus(500);
    });
});

module.exports = router;