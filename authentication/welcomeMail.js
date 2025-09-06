const e = require('express');
const nodemailer = require('nodemailer');
const { use } = require('passport');

async function sendWelcomeEmail(email, name) {

  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service provider
      port: 587, // Port for secure SMTP
      secure: false,
      requireTLS: true, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS // Your email password or app password
      }
    });

    const info = await transporter.sendMail({
      from: `"Join The Movement" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // List of recipients
      subject: 'Welcome to JTM Community', // Subject line
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