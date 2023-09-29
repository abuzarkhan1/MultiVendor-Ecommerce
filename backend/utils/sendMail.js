const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    // host: process.env.SMPT_HOST,
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

// let info = await transporter.sendMail({
//     from: 'ecommorce-digitc@gmail.com',
//     to: data.to,
//     subject: data.subject,
//     text: data.text,
//     html: data.htm,
//   }, function(error, res){
//     if(error){
//       console.log("Error", error);
//     }else {
//       console.log('Email sent: ' + res.response);
//     }
//   });

//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

module.exports = sendMail;
