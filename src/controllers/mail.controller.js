import nodemailer from "nodemailer";
import "dotenv/config";

export let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 443,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PWD,
  },
});
