import { client } from "../../../sanity/lib/client";

export const sanityQuery = async function (_type: string, options: string) {
  return await client.fetch(`*[_type=="${_type}"]${options}`);
};
