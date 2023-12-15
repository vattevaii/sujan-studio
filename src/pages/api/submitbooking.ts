import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";

type ResponseData = {
  message: string;
};
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      const data = {
        _type: "booking",
        ...JSON.parse(req.body),
      };

      client
        .create(data, {
          token: TOKEN,
        })
        .then(() => {
          res.status(201).json({ message: "Booking success!" });
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
      //   .then(console.log)
      //   .catch(console.error)
    } catch (err) {
      res.status(500).json({ message: err as string });
    }
  } else res.status(405).json({ message: "No route" });
}
