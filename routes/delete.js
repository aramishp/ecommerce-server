const { Router } = require('express');
const {deleteFromTable} = require('../database/delete-from-table');

const router = Router();

router.post('', async (req, res) => {
    const { product, table } = req.body;
    await deleteFromTable(req.session.sessionID, product, table)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(() => {
        res.sendStatus(500);
    }); 
})

module.exports = router;