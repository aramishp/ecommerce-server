const { Router } = require('express');
const {areValidStrings} = require('../utils/validate-input');
const {findUserByEmail} = require('../database/find-user-by-email');

const jwt = require('jsonwebtoken');
const { sendEmail } = require('../mail/send-email');
const JWT_SECRET = "tb23h1n8ui1n989o1mt56h1nrb3v1wdcw()31n68ujkyk5";

const router = Router();

router.put('', async (req, res) => {
    const { email } = req.body;
    if(!areValidStrings(email)) res.sendStatus(400); 
    else {
        const user = await findUserByEmail(email);
        if(!user) res.sendStatus(404);
        else {
            const secret = JWT_SECRET + user.password;
            const token = jwt.sign({ email: user.email, id: user.ID}, secret, {
                expiresIn: "5m"
            });
            sendEmail(email, `http://localhost:3000/resetpassword/${user.ID}/${token}`);
            res.sendStatus(200);
        }
    }
});

module.exports = router;