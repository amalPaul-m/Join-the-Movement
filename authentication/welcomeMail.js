const e = require('express');
const nodemailer = require('nodemailer');
const { use } = require('passport');

async function sendWelcomeEmail(email, name) {

  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      port: 587, 
      secure: false,
      requireTLS: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
      }
    });

    const info = await transporter.sendMail({
      from: `"Join The Movement" <${process.env.EMAIL_USER}>`, 
      to: email, 
      subject: 'Welcome to JTM Community', 
      text: `We are excited to have you join our community with investment <Amount> eg: 1000 USDT BEP20`, // Plain text body
      html: `
    <div style="margin: 0 auto; padding: 30px; background-color: #ffffff; border-radius: 8px; font-family: Arial, sans-serif;">
      
      <p style="font-size: 16px; color: #333333;">
        Hello <strong>${name}</strong>,
      </p><br>
      <p style="font-size: 16px; color: #333333;">
        We are excited to have you join our community with investment <Amount> eg: 1000 USDT BEP20
      </p><br>
      <p style="font-size: 14px; color: #777777;">
        Warm Regards,<br>The JTM Team.
      </p>
      <div style="text-align: center; font-size: 12px; color: #999999; margin-top: 30px;">
        &copy; 2025 Join the movement. All rights reserved.
      </div>
    </div>
  `
    });
    return info.accepted.length > 0; // Return true if email was sent successfully

  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error('Failed to send verification email');
  }
}

module.exports = sendWelcomeEmail;


// const Mailjet = require('node-mailjet');

// async function sendWelcomeEmail(email, otp) {
//   try {
//     const mailjet = Mailjet.apiConnect(
//       process.env.MJ_APIKEY_PUBLIC,   // Your Mailjet Public Key
//       process.env.MJ_APIKEY_PRIVATE   // Your Mailjet Private Key
//     );

//     const request = await mailjet
//       .post('send', { version: 'v3.1' })
//       .request({
//         Messages: [
//           {
//             From: {
//               Email: process.env.EMAIL_USER, // Your verified Mailjet sender email
//               Name: "Join The Movement",
//             },
//             To: [
//               {
//                 Email: email,
//                 Name: "passenger 1"
//               },
//             ],
//             Subject: "welcome to jointhemovement community",
//             TextPart: `Your OTP for verification is: ${otp}`,
//             HTMLPart: `
//               <div style="max-width: 500px; margin: 0 auto; padding: 30px; background-color: #ffffff; border-radius: 8px; font-family: Arial, sans-serif;">
//                 <h3 style="text-align: center; color: #000000ff;">OTP Verification</h3>
//                 <p style="text-align: center; font-size: 16px; color: #333333;">
//                   Hello <strong>Customer!</strong>,
//                 </p>
//                 <p style="text-align: center; font-size: 16px; color: #333333;">
//                   Your OTP for verification is:
//                 </p>
//                 <div style="text-align: center; margin: 20px 0;">
//                   <span style="display: inline-block; background-color: #c2c2c2ff; color: #ffffff; font-size: 24px; letter-spacing: 4px; padding: 12px 24px; border-radius: 8px;">
//                     ${otp}
//                   </span>
//                 </div>
//                 <p style="text-align: center; font-size: 16px; color: #333333;">
//                   This OTP is valid for the next <strong>5 minutes</strong>.
//                 </p>
//                 <p style="text-align: center; font-size: 14px; color: #777777;">
//                   If you did not request this, please ignore this email.
//                 </p>
//                 <div style="text-align: center; font-size: 12px; color: #999999; margin-top: 30px;">
//                   &copy; 2025 Join the movement. All rights reserved.
//                 </div>
//               </div>
//             `,
//           },
//         ],
//       });

//     return request.body.Messages[0].Status === "success";

//   } catch (error) {
//     console.error("Error sending verification email:", error);
//     throw new Error("Failed to send verification email");
//   }
// }

// module.exports = sendWelcomeEmail;
