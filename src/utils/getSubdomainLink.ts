export function getSubdomainLink(title: string) {
  const sStirg = title.toLowerCase();
  if (sStirg.includes("wedding"))
    return process.env.NEXT_PUBLIC_WEDDING_SUBDOMAIN?? "#";
  if (sStirg.includes("coorporate"))
    return process.env.NEXT_PUBLIC_COORPORATE_SUBDOMAIN?? "#";
  if (sStirg.includes("family"))
    return process.env.NEXT_PUBLIC_FAMILY_SUBDOMAIN?? "#";
  if (sStirg.includes("estate"))
    return process.env.NEXT_PUBLIC_REALESTATE_SUBDOMAIN?? "#";
  if (sStirg.includes("school"))
    return process.env.NEXT_PUBLIC_SCHOOL_SUBDOMAIN?? "#";
  return "#";
}
