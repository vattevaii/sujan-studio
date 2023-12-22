import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import { projectId } from "../../../sanity/env";
type ResponseData = {
  message: string | any;
} & { [x: string]: any };
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
const query = `
  *[ _type in ["sanity.imageAsset", "sanity.fileAsset"] ]
  {_id, "refs": count(*[ references(^._id) ])}
  [ refs == 0 ]
  ._id
`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    client
      .fetch(query)
      .then((ids) => {
        if (!ids.length) {
          console.log("No assets to delete");
          return true;
        }

        console.log(`Deleting ${ids.length} assets`);
        return ids
          .reduce(
            (trx: any, id: any) =>
              trx.delete(id),
            client.transaction()
          )
          .commit({
            token: TOKEN
          })
          .then(() => res.status(201).json({ message: "Done" }));
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });

    //   .then(// console.log)
    //   .catch(console.error)
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
