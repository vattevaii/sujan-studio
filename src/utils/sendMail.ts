import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export type MailModel = {
  html: string;
  to: string;
  subject: string;
  title: string;
};

export default async function sendMail({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) {
  const transport = nodemailer.createTransport({
    host: "ventraip.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });
  console.log({
    from: process.env.MY_EMAIL,
    to: email,
    cc: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: subject,
    text: message,
  });
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: email,
    cc: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: subject,
    html: message,
  };

  return new Promise<string>((resolve, reject) => {
    transport.sendMail(mailOptions, function (err: Error | null) {
      if (!err) {
        resolve("Email sent");
      } else {
        console.log("Mail not sent", err);
        reject(err.message);
      }
    });
  });
}
// export default async function sendMail({
//   email,
//   name,
//   message,
//   action,
// }: {
//   email: string;
//   name: string;
//   message: string;
//   action: "booking" | "contact";
// }) {
//   const transport = nodemailer.createTransport({
//     host: "ventraip.email",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: true,
//     },
//   });
//   const actionString = (() => {
//     switch (action) {
//       case "booking":
//         return "Get Estimate";
//       case "contact":
//         return "Contact Form";
//       default:
//         return "hello";
//     }
//   })();
//   console.log({
//     from: process.env.MY_EMAIL,
//     to: process.env.MAIL_TO,
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `${actionString} from ${name} (${email})`,
//     text: message,
//   });
//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MAIL_TO,
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `${actionString} from ${name} (${email})`,
//     html: message,
//   };

//   return new Promise<string>((resolve, reject) => {
//     transport.sendMail(mailOptions, function (err: Error | null) {
//       if (!err) {
//         resolve("Email sent");
//       } else {
//         console.log("Mail not sent", err);
//         reject(err.message);
//       }
//     });
//   });
// }
