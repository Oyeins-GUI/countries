import Image from "next/image";

type CountryCardProps = {
   country: string;
   flag: string;
   population: number;
   region: string;
   capital: string;
};

export default function CountryCard({
   country,
   flag,
   population,
   region,
   capital,
}: CountryCardProps) {
   return (
      <div className="shadow-md shadow-nav-bg bg-nav-bg text-text max-w-60">
         <Image
            src={flag}
            alt={`${country} flag`}
            className="w-60 aspect-video"
            width={240}
            height={0}
            priority
         />
         <div className="px-4 flex flex-col">
            <h3 className="uppercase font-extrabold mt-4 mb-2 truncate">
               {country}
            </h3>
            <div className="pb-3">
               <p className="font-bold">
                  Population:{" "}
                  <span className="font-normal">
                     {new Intl.NumberFormat().format(population)}
                  </span>
               </p>
               <p className="font-bold">
                  Region: <span className="font-normal">{region}</span>
               </p>
               <p className="font-bold">
                  Capital: <span className="font-normal">{capital}</span>
               </p>
            </div>
         </div>
      </div>
   );
}
