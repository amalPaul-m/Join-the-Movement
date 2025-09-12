const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendVerificationEmail(email, otp) {
  try {
    // Configure SMTP transporter for Mailjet
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 2525,          // ✅ DigitalOcean compatible
      secure: false,       // Not SSL
      requireTLS: true,    // Force STARTTLS
      auth: {
        user: process.env.MJ_APIKEY_PUBLIC,
        pass: process.env.MJ_APIKEY_PRIVATE,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Join The Movement" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your Join The Movement account",
      text: `Your OTP is: ${otp}`,
      html: `
        <div style="max-width: 500px; margin: 0 auto; padding: 30px; background: #fff; border-radius: 8px; font-family: Arial;">
          <h3 style="text-align: center; color: #000;">OTP Verification</h3>
          <p style="text-align: center;">Hello Customer!</p>
          <p style="text-align: center;">Your OTP for verification is:</p>
          <div style="text-align:center; margin:20px 0;">
            <span style="background-color:#c2c2c2; color:#fff; font-size:24px; letter-spacing:4px; padding:12px 24px; border-radius:8px;">
              ${otp}
            </span>
          </div>
          <p style="text-align: center;">This OTP is valid for the next <strong>5 minutes</strong>.</p>
          <p style="text-align: center; font-size: 12px; color:#777;">If you did not request this, please ignore this email.</p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("📧 Email sent:", info.accepted);
    return info.accepted.length > 0;

  } catch (err) {
    console.error("❌ Error sending verification email:", err);
    throw new Error("Failed to send verification email");
  }
}

module.exports = sendVerificationEmail;
