import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default async function sendMail({
  email,
  name,
  message,
  action,
}: {
  email: string;
  name: string;
  message: string;
  action: "booking" | "contact";
}) {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "ventraip.email",
    port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 465,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  console.log({
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  });
  const actionString = (() => {
    switch (action) {
      case "booking":
        return "Get Estimate";
      case "contact":
        return "Contact Form";
      default:
        return "hello";
    }
  })();
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${actionString} from ${name} (${email})`,
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
