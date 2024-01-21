import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import { ContactFormSchema } from "@/utils/schema/contactUsSchema";
import sendMail, { MailModel } from "@/utils/sendMail";
import { simpleTemplate } from "@/utils/simpleTemplate";
type ResponseData = {
  message: string;
} & { [x: string]: any };
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const { gReCaptchaToken: captchaToken, ...body } =
        ContactFormSchema.parse(JSON.parse(req.body));
      const formData = `secret=${secretKey}&response=${captchaToken}`;
      const captchaData = await fetch(
        "https://www.google.com/recaptcha/api/siteverify?" + formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      ).then((d) => {
        return d.json();
      });

      // res.status(200).send({ message: "Hello", captchaData });
      // return;
      const { files, ...restBody } = body;
      const data = {
        _type: "contactus",
        attachments: files.map((item: any) => {
          const _key = crypto.randomUUID();
          return {
            _key,
            _type: "attachment",
            asset: { _type: "reference", _ref: item },
          };
        }),
        ...restBody,
        captchaData: JSON.stringify(captchaData),
      };
      client
        .create(data, {
          token: TOKEN,
        })
        .then((d) => {
          res
            .status(201)
            .json({ message: "Contact Us Form submitted!", _id: d._id });
          // res.redirect("/contact-form-submitted");
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
      client
        .fetch(
          `
          *[_type=="mailModel" && for=="contact-us"]
          `
        )
        .then((d: MailModel[]) => {
          const data = {
            firstName: `${body.firstName}`,
            lastName: `${body.lastName}`,
            fullName: `${body.firstName} ${body.lastName}`,
            phone: body.phoneNumber,
            email: body.email ?? "",
            subject: body.subject,
            message: body.message,
          };
          d.forEach((item) => {
            let mail;
            if (item.to === "admin") mail = process.env.MAIL_TO;
            else if (!!body.email && body.email !== "") mail = body.email;
            if (!!mail)
              sendMail({
                email: mail,
                subject: simpleTemplate(item.subject, data),
                message: simpleTemplate(item.html, data),
              })
                .then(() => {
                  console.log("Sent mail to ", mail!);
                })
                .catch((e) => {
                  console.log("Failed to send mail to ", mail!, e);
                });
          });
        });
      // sendMail({
      //   email: (data.email ?? "") + "  " + data.phoneNumber,
      //   name: data.firstName + " " + data.lastName,
      //   message: `Contact Form Submission:
      //     Name: ${data.firstName} ${data.lastName}
      //     Message: ${data.message}
      //     Subject: ${data.subject}
      //     Phone: ${data.phoneNumber}
      //     Email: ${data.email}
      //     See all data in sanity studio
      //     `,
      //   action: "contact",
      // })

      //   .then(// console.log)
      //   .catch(console.error)
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err as string });
    }
  } else res.status(405).json({ message: "No route" });
}
