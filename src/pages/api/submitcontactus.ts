import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import bookingSchema from "@/utils/schema/bookingSchema";
import { ContactFormSchema } from "@/utils/schema/contactUsSchema";
type ResponseData = {
  message: string;
} & { [x: string]: any };
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const body = JSON.parse(req.body);
      console.log(body);
      ContactFormSchema.parse(body);
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
      };

      client
        .create(data, {
          token: TOKEN,
        })
        .then((d) => {
          res
            .status(201)
            .json({ message: "Contact Us Form submitted!", _id: d._id });
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
      //   .then(// console.log)
      //   .catch(console.error)
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err as string });
    }
  } else res.status(405).json({ message: "No route" });
}
