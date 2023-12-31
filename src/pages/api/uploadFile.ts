import { parseForm } from "@/utils/parseForm";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../sanity/lib/client";
import * as fs from "fs";
const TOKEN =
  "skoWQ5tU9s7mXGJHf927wYM0V4CMvi3xqidqGN4pAksWdNB6wrDDZJVjA3kgNZgzKOsJxiFp7SBR0VXdH7OqXFoL2JO3X4Yqc6pLr4rJD7YHOIngIH2PQhko8Y5EHOx5cO9UDE9COmwclodT0DLO2JXzD0VGzCMaXsHgkav065u3rzSnQuY9";
const clonedClient = client.clone();
clonedClient.config({ token: TOKEN });
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    data:
      | ({
          url: string | string[];
          _id: string | string[];
        } & { [x: string]: any })
      | null;
    error: any;
    message?: string;
  }>
) => {
  if (req.method !== "POST") {
    // res.setHeader("Allow", "POST");
    res.status(405).json({
      data: null,
      error: "Method Not Allowed",
    });
    return;
  }
  // Just after the "Method Not Allowed" code
  try {
    const { fields, files } = await parseForm(req);
    if (!files) throw new Error("No files found");
    try {
      // files.
      // if (files instanceof File)
      //   res.status(200).json({
      //     message: "Upload successful",
      //     data: { url: "", _id: "asdf", fileName: "resp.originalFilename" },
      //     error: null,
      //   });
      // res
      //   .status(400)
      //   .json({ message: "Error", error: "Not typeof file", data: null });

      const { _id, url, ...resp } = await clonedClient.assets
        .upload("file", fs.readFileSync(files.filepath), {
          contentType: files.mimetype!,
          label: files.originalFilename!,
          filename: files.originalFilename!,
        })
        .then((response) => {
          // console.log(response);
          return response;
        });
      res.status(200).json({
        message: "Upload successful",
        data: { url: url, _id, fileName: resp.originalFilename, ...resp },
        error: null,
      });
    } catch (err: any) {
      res
        .status(400)
        .json({ message: "Error", error: err?.message, data: null });
    }
    // let url = Array.isArray(file) ? file.map((f) => f.filepath) : file.filepath;
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ data: null, error: e.message });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
