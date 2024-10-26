"use client";
import { Country } from "@/app/types";
import Link from "next/link";
import CountryCard from "./CountryCard";

export default function CountryGrid({
   countries,
}: {
   countries: Country[] | [];
}) {
   return (
      <main className="grid grid-cols-auto-fit items-center justify-items-center gap-6 max-w-7xl mx-auto mt-7 py-5 px-3 md:px-5 xl:px-0">
         {countries.length === 0 ? (
            <p>Country Not Found</p>
         ) : (
            countries.map(
               ({ name, capital, flags: { png }, region, population }) => {
                  return (
                     <Link key={name} href={`/${name.toLowerCase()}`}>
                        <CountryCard
                           country={name}
                           capital={capital}
                           flag={png}
                           region={region}
                           population={population}
                        />
                     </Link>
                  );
               }
            )
         )}
      </main>
   );
}
