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
      let query = `*[_type=="locationItem"`;
      if (id) {
        query += ` && _id=="${id}"]`;
      } else query += `]`;
      client
        .fetch(query)
        .then((d) => {
          // console.log(d);
          res
            .status(200)
            .json({ message: "Locations found!", data: id ? d[0] : d });
        })
        .catch((err) => {
          res.status(500).json({ message: err });
        });
      //   .then(// console.log)
      //   .catch(console.error)
    } catch (err) {
      // console.log(err);
      res.status(500).json({ message: JSON.stringify(err) });
    }
  } else res.status(405).json({ message: "No route" });
}
