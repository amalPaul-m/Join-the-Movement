const usersSchema = require('../models/usersSchema');
const generateOtp = require('../authentication/generateotp');
const sendVerificationEmail = require('../authentication/mailer');
const sendWelcomeEmail = require('../authentication/welcomeMail');

const postVerifyOtp = async (req, res, next) => {
  try {

    const otp = req.body.otp;
    if (otp === req.session.otp) {
      const userData = new usersSchema(req.session.userData);

      const email = userData.email;
      const name = userData.name;
      
      const checkUser = await usersSchema.findOne({email:email})

      if(!checkUser) {
        const emailSend = await sendWelcomeEmail(email, name);
        if (!emailSend) {
          return res.json("email-error");
        }
      }

      await userData.save();

      return res.json({ success: true, redirectUrl: '/userlogin' });
    } else {

      return res.json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    console.log(error);
  }
};


const postResendOtp = async (req, res, next) => {
  try {
    const email = req.session.userData?.email;

    if (!email) {
      return res.json({ success: false, message: 'Email not found in session' });
    }

    const newOtp = generateOtp(); // same function you used before
    const emailSent = await sendVerificationEmail(email, newOtp);

    if (emailSent) {
      req.session.otp = newOtp;
      return res.json({ success: true });
    } else {
      return res.json({ success: false, message: 'Failed to send email' });
    }

  } catch (error) {
    console.log(error)
  }
};


module.exports = { postVerifyOtp, postResendOtp }