require('dotenv').config();
const sendVerificationEmail = require('./authentication/mailer');

(async () => {
  const testEmail = 'your-email@example.com';
  const otp = Math.floor(100000 + Math.random() * 900000);
  try {
    const result = await sendVerificationEmail(testEmail, otp);
    console.log('Email sent?', result);
  } catch (err) {
    console.error('Error:', err);
  }
})();
