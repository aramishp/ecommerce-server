const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'batmanecommerce@gmail.com',
      pass: 'ziqwhlsoopgvmlge'
    }
  });

function sendEmail(email, link) {
    const mailOptions = {
        from: 'batmanecommerce@gmail.com',
        to: email,
        subject: 'Batman ecommerce password reset',
        text: `You can reset your password here: ${link}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return(error);
        } else {
          return info.response;
        }
    });
}

module.exports = {sendEmail}


