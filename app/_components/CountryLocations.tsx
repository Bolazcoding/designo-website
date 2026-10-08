import Image from "next/image";
import CanadaMap from "@/public/locations/desktop/image-map-canada.png";
import AustraliaMap from "@/public/locations/desktop/image-map-australia.png";
import UKMap from "@/public/locations/desktop/image-map-united-kingdom.png";

type CountryLocationData = {
  country: string;
  office: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  map: typeof CanadaMap | typeof AustraliaMap | typeof UKMap;
};

const locations: CountryLocationData[] = [
  {
    country: "Canada",
    office: "Designo Central Office",
    address: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    map: CanadaMap,
  },
  {
    country: "Australia",
    office: "Designo AU Office",
    address: "19 Balonne Street",
    city: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    map: AustraliaMap,
  },
  {
    country: "United Kingdom",
    office: "Designo UK Office",
    address: "13 Colorado Way",
    city: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    map: UKMap,
  },
];

function CountryLocation({
  location,
  reverse = false,
}: {
  location: CountryLocationData;
  reverse?: boolean;
}) {
  return (
    <article
      className={`flex flex-col gap-8 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 rounded-3xl bg-tertiary/30 px-8 py-32 sm:px-40">
        <h2 className="text-primary text-[4rem] font-medium">
          {location.country}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="text-secondary text-[1.7rem] font-bold">
              {location.office}
            </p>
            <p className="text-secondary text-[1.6rem]">{location.address}</p>
            <p className="text-secondary text-[1.6rem]">{location.city}</p>
          </div>
          <div>
            <p className="text-secondary text-[1.7rem] font-bold">Contact</p>
            <p className="text-secondary text-[1.6rem] font-bold">
              P: {location.phone}
            </p>
            <p className="text-secondary text-[1.6rem] font-bold">
              M: {location.email}
            </p>
          </div>
        </div>
      </div>
      <Image
        className="w-full rounded-3xl object-cover md:w-[350px]"
        src={location.map}
        alt={`${location.country} map`}
        quality={100}
      />
    </article>
  );
}

function CountryLocations() {
  return (
    <section className="mx-[6rem] flex flex-col gap-14">
      {locations.map((location, index) => (
        <CountryLocation
          key={location.country}
          location={location}
          reverse={index === 1}
        />
      ))}
    </section>
  );
}

export default CountryLocations;
