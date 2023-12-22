import Link from "next/link";

export type LocationItem = {
  locationName: string;
  slug: string;
  address: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
};
const LocationCard = ({ locationData, variant="large" }: { locationData: LocationItem, variant?:"small"|"large" }) => {
  const { locationName, address, city, postalCode, phoneNumber } = locationData;

  return (
    <div className="flex flex-col items-start gap-4 text-left">
      <Link
        href={"/l/" + locationData.slug}
        className={"font-semibold hover:underline decoration-2 transition-all "+(variant==="large"?"text-11xl xl:text-21xl":"text-5xl xl:text-11xl")}
      >
        {locationName}
      </Link>
      <div className={"font-raleway "+(variant==="large"?"text-xl xl:text-5xl":"text-md xl:text-xl")}>
        <p>{address}</p>
        <p>
          {city} {postalCode}
        </p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};

export default LocationCard;
