export type LocationItem = {
    locationName: string,
    address: string,
    city: string,
    postalCode: string,
    phoneNumber: string,
}
const LocationCard = ({ locationData }: { locationData: LocationItem }) => {
    const { locationName, address, city, postalCode, phoneNumber } = locationData;

    return (
        <div className="flex flex-col items-start gap-4 text-left">
            <div className="font-semibold text-11xl xl:text-21xl">
                {locationName}
            </div>
            <div className="text-xl xl:text-5xl font-raleway">
                <p>{address}</p>
                <p>{city} {postalCode}</p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    );
};

export default LocationCard;