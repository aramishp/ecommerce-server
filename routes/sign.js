const { Router } = require('express');
const { hashPassword } = require('../utils/sign-helpers');
const { areValidStrings } = require('../utils/validate-input');
const {findUserByEmail} = require('../database/find-user-by-email');
const {newUser} = require('../database/create-user');

const router = Router();

router.post("", async (req, res) => {
    const {firstname, lastname, email} = req.body;
    if(!areValidStrings(firstname, lastname, email)) res.sendStatus(400);
    else {
        const user = await findUserByEmail(email);
        if(user) res.sendStatus(409);
        else {
            const password = hashPassword(req.body.password);
            const isCreated = await newUser(firstname, lastname, email, password);
            if(!isCreated) res.sendStatus(500);
            else {
                req.session.sessionID = `${isCreated.insertId}`;
                res.sendStatus(200);
            }
        }
    }
});

router.get("", (req, res) => {
    if(req.session.sessionID) res.sendStatus(200);
    else res.sendStatus(401);
});

module.exports = router;