const { Router } = require('express');
const {areValidStrings} = require('../utils/validate-input');
const {findUserById} = require('../database/find-user-by-id');

const jwt = require('jsonwebtoken');
const { hashPassword } = require('../utils/sign-helpers');
const { updatePassword } = require('../database/update-password');
const JWT_SECRET = "tb23h1n8ui1n989o1mt56h1nrb3v1wdcw()31n68ujkyk5";

const router = Router();

router.get('/:id/:token', async (req, res) => {
    const { id, token } = req.params;
    if(!areValidStrings(id, token)) res.sendStatus(400);
    else {
        const user = await findUserById(id);
        if(!user) res.sendStatus(404);
        else {
            const secret = JWT_SECRET + user[0].password;
            try {
                const verify = jwt.verify(token, secret);
                res.send(user[0].email);
            } catch (error) {
                res.send(false);
            }
        }
    }
})

router.put('/:id/:token', async (req, res) => {
    const { id, token } = req.params;
    if(!areValidStrings(id, token)) res.sendStatus(400);
    else {
        const user = await findUserById(id);
        if(!user) res.sendStatus(404);
        else {
            const secret = JWT_SECRET + user[0].password;
            try {
                const verify = jwt.verify(token, secret);
                const password = hashPassword(req.body.password);
                await updatePassword(id, password);
                res.sendStatus(200);
            } catch (error) {
                res.sendStatus(500);
            }
        }
    }
})

module.exports = router;