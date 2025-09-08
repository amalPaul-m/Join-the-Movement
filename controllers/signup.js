const usersSchema = require('../models/usersSchema')
const generateOtp = require('../authentication/generateotp');
const sendVerificationEmail = require('../authentication/mailer');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


const getUserSignup = async (req, res, next) => {

res.render('signup', { title: 'Join the movement' });

};


const postUserSignup = async (req, res, next) => {
  try {
    const { name, email, password, mobile, country } = req.body;

      const user = await usersSchema.findOne({ email });
      if (user) {
        return res.render('signup',
          { content: 'This email is already registered, try another' });

      } else {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        const userData = {
          name: name,
          email: email,
          password: hashedPassword,
          phone: mobile,
          country: country
        };


        //OTP generation and sending logic can be added here

        const otp = generateOtp();
        const emailSend = await sendVerificationEmail(email, otp);

        if (!emailSend) {
          return res.json("email-error");
        }
        req.session.otp = otp; // Store OTP in session
        req.session.userData = userData; // Store user data in session for later use
        res.render('verifyOtp',
          {
            content: `One Time Password (OTP) has been send via Email to ${email}`,
            alert: 'mt-5'
          }
        )

      }
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getUserSignup, postUserSignup }



