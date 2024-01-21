import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import bookingSchema from "@/utils/schema/bookingSchema";
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
      const { gReCaptchaToken: captchaToken, ...body } = bookingSchema.parse(
        JSON.parse(req.body)
      );
      const formData = `secret=${secretKey}&response=${captchaToken}`;
      const captchaData = await fetch(
        "https://www.google.com/recaptcha/api/siteverify?" + formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      )
        .then((d) => d.json())
        .catch(() => ({ message: "Couldn't validate captcha token" }));
      const data = {
        _type: "booking",
        ...body,
        captchaData: JSON.stringify(captchaData),
      };
      client
        .create(data, {
          token: TOKEN,
        })
        .then((d) => {
          res.status(201).json({ message: "Booking success!", _id: d._id });
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
      client
        .fetch(
          `
          *[_type=="mailModel" && for=="book-us"]
          `
        )
        .then((d: MailModel[]) => {
          const data = {
            fullName: `${body.personal.fullName}`,
            phone: body.personal.phone,
            email: body.personal.email ?? "",
            need: body.needs,
            purpose: body.purpose,
            exactNeed: body.exactNeed,
            date: body.prefer.date,
            time: body.prefer.startTime,
            streetAddress: body.address.street,
            postalCode: body.address.zip,
            city: body.address.city,
            hours: body.prefer.hours.toString(),
            checked: "Checked"
          };
          d.forEach((item) => {
            let mail;
            if (item.to === "admin") mail = process.env.MAIL_TO;
            else if (!!data.email && data.email !== "") mail = data.email;
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
      //   .then(// console.log)
      //   .catch(console.error)
    } catch (err) {
      res.status(500).json({ message: err as string });
    }
  } else res.status(405).json({ message: "No route" });
}
