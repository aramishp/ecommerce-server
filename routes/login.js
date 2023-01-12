const { Router } = require('express');
const { comparePassword } = require('../utils/login-helpers')
const {areValidStrings} = require('../utils/validate-input');
const {findUserByEmail} = require('../database/find-user-by-email');

const router = Router();

router.post('', async (req, res) => {
    const { email, password } = req.body;
    if(!areValidStrings(email, password)) res.sendStatus(400); 
    else {
        const user = await findUserByEmail(email);
        if(!user) res.sendStatus(404);
        else {
            const isPasswordCorrect = comparePassword(password, user.password);
            if(!isPasswordCorrect) res.sendStatus(401);
            else {
                req.session.sessionID = `${user.ID}`;
                res.sendStatus(200);
            }
        }
    }
});


router.get("", (req, res) => {
    if(req.session.sessionID) res.status(200).send(true);
    else res.status(200).send(false);
});

module.exports = router;