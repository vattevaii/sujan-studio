import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async function sendMail({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) {
  const transport = nodemailer.createTransport({
    host: "ventraip.email",
    port: 465,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  console.log({
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  });
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  return new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOptions, function (err: Error | null) {
      if (!err) {
        resolve("Email sent");
      } else {
        reject(err.message);
      }
    });
  });
}
