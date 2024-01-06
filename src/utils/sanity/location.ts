import { LocationItem } from "@/components/LocationCard";
import { client } from "../../../sanity/lib/client";
import { siteSettings } from "@/pages/_app";

export const getAllLocations: () => Promise<{
  locations: LocationItem[];
  siteSettings: siteSettings[];
}> = async function () {
  const locationQ = `*[_type=="locationItem"]|order(orderRank){
      locationName,"slug":slug.current,address,city,postalCode,phoneNumber
    }`;
  const siteSettingsQ = `*[_type=="siteSettings"]{
      phoneNumber,
      "logo":logoLight.asset -> url,
      location,
      locationLink,
      email,
      companyName,
      "socialLinks":socialLinks[]{
        "logo":icon.asset->url,
        name,
        "url":link
      },
      "clients":clients[]{
        "logo":icon.asset->url,
        name,
        "url":link
      }
    }`;
  return await client.fetch(
    `{"locations":${locationQ}, "siteSettings":${siteSettingsQ}}`
  );
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
