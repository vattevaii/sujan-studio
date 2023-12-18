import { LocationItem } from "@/components/LocationCard";
import { client } from "../../../sanity/lib/client";

export const getAllLocations: () => Promise<LocationItem[]> =
  async function () {
    return await client.fetch(`*[_type=="locationItem"]{
        locationName,"slug":slug.current,address,city,postalCode,phoneNumber
    }`);
  };
export const getAllSubLocations = async function (locationslug?: string) {
  const mainQuery = locationslug ? `&& slug.current=="${locationslug}"` : "";
  // console.log(mainQuery);
  const data: (LocationItem & {
    sublocations: { sublocationName: string; slug: string }[];
  })[] = await client.fetch(`*[_type=="locationItem"${mainQuery}]{
        locationName,"slug":slug.current,address,city,postalCode,phoneNumber
        ,"sublocations":sublocations[]{
        sublocationName, "slug":slug.current
        }
    }`);
  return data;
};
