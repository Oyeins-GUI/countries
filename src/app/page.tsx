import SearchAndFilter from "@/components/SearchAndFilter";
import { countriesData } from "@/data";
import CountryGrid from "@/components/CountryGrid";
import Navbar from "@/components/Navbar";
import { Country } from "./types";

export default async function Home({
   searchParams,
}: {
   searchParams: { [key: string]: string | undefined };
}) {
   const filter =
      searchParams.filter?.toLowerCase() === undefined
         ? ""
         : searchParams.filter?.toLowerCase();
   const search =
      searchParams.search?.toLowerCase() === undefined
         ? ""
         : searchParams.search?.toLowerCase();

   const countries = getData(filter, search) as Country[];

   return (
      <>
         <Navbar />
         <main className="bg-background">
            <SearchAndFilter />
            <CountryGrid countries={countries !== undefined ? countries : []} />
         </main>
      </>
   );
}

function getData(filter: string, search: string) {
   if (filter === "" && search === "") return countriesData;

   if (filter === "" && search !== "")
      return countriesData.filter(
         (country) =>
            country.name.toLowerCase().includes(search) ||
            country.name.toLowerCase() === search
      );

   if (filter !== "" && search === "")
      return countriesData.filter(
         (country) => country.region.toLowerCase() === filter
      );

   if (filter !== "" && search !== "")
      return countriesData
         .filter((country) => country.region.toLowerCase() === filter)
         .filter(
            (country) =>
               country.name.toLowerCase().includes(search) ||
               country.name.toLowerCase() === search
         );

   if (filter === "") return countriesData;
   if (search === "") return countriesData;
}
