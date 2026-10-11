import Image from "next/image";
import CanadaMap from "@/public/locations/desktop/image-map-canada.png";
import AustraliaMap from "@/public/locations/desktop/image-map-australia.png";
import UKMap from "@/public/locations/desktop/image-map-united-kingdom.png";
import CanadaTabletMap from "@/public/locations/tablet/image-map-canada.png";
import AustraliaTabletMap from "@/public/locations/tablet/image-map-australia.png";
import UKTabletMap from "@/public/locations/tablet/image-map-uk.png";

type CountryLocationData = {
  country: string;
  office: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  map: typeof CanadaMap | typeof AustraliaMap | typeof UKMap;
  tabletMap:
    | typeof CanadaTabletMap
    | typeof AustraliaTabletMap
    | typeof UKTabletMap;
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
    tabletMap: CanadaTabletMap,
  },
  {
    country: "Australia",
    office: "Designo AU Office",
    address: "19 Balonne Street",
    city: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    map: AustraliaMap,
    tabletMap: AustraliaTabletMap,
  },
  {
    country: "United Kingdom",
    office: "Designo UK Office",
    address: "13 Colorado Way",
    city: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    map: UKMap,
    tabletMap: UKTabletMap,
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
      className={`flex flex-col overflow-hidden lg:gap-10 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <picture className="order-1 block w-full lg:order-2 lg:w-[35rem] lg:shrink-0">
        <source media="(max-width: 1023px)" srcSet={location.tabletMap.src} />
        <Image
          className="h-full w-full rounded-2xl object-cover"
          src={location.map}
          alt={`${location.country} office location map`}
          quality={100}
          sizes="(max-width: 1023px) 100vw, 35rem"
        />
      </picture>
      <div className=" bg-[#fdf3f0] order-2 flex-1 px-6 py-12 text-center rounded-2xl sm:px-12 sm:py-16 sm:text-left lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-20 lg:py-20">
        <h2 className="text-[3.2rem] font-medium text-primary sm:text-[3.8rem]">
          {location.country}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 text-[1.6rem] leading-relaxed text-secondary sm:mt-8 sm:grid-cols-2 sm:gap-8">
          <div>
            <p className="font-bold">{location.office}</p>
            <p>{location.address}</p>
            <p>{location.city}</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <p className="font-bold">P: {location.phone}</p>
            <p className="break-words font-bold">M: {location.email}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function CountryLocations() {
  return (
    <section className="flex mx-[6rem] flex-col overflow-hidde max-md:w-full max-md:max-w-[111rem] max-md:mx-auto gap-12 px-6 py-10 sm:px-10 sm:py-16 lg:px-0 lg:py-0">
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
