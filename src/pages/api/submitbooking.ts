import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import bookingSchema from "@/utils/schema/bookingSchema";
type ResponseData = {
  message: string;
} & { [x: string]: any };
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const body = bookingSchema.parse(JSON.parse(req.body));
      const data = {
        _type: "booking",
        ...body,
      };
      const captchaToken = body.gReCaptchaToken;
      const formData = `secret=${secretKey}&response=${captchaToken}`;
      fetch("https://www.google.com/recaptcha/api/siteverify?" + formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
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
      //   .then(// console.log)
      //   .catch(console.error)
    } catch (err) {
      res.status(500).json({ message: err as string });
    }
  } else res.status(405).json({ message: "No route" });
}
