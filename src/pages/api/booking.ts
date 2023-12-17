import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
type ResponseData = {
  message: string | any;
} & { [x: string]: any };
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    try {
      const id = req.query["id"] as string;
      const query = `*[_type=="booking" && _id=="${id}"]`;
      client
        .fetch(query)
        .then((d) => {
          console.log(d);
          res.status(200).json({ message: "Booking found!", data: d[0] });
        })
        .catch((err) => {
          res.status(500).json({ message: err });
        });
      //   .then(console.log)
      //   .catch(console.error)
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: JSON.stringify(err) });
    }
  } else res.status(405).json({ message: "No route" });
}
