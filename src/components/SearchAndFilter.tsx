"use client";
import { uppercase } from "@/utils/uppercase";
import { ChevronDown, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchAndFilter() {
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const { replace } = useRouter();

   const handleSearch = useDebouncedCallback((searchTerm: string) => {
      const params = new URLSearchParams(searchParams);

      if (searchTerm) {
         params.set("search", searchTerm);
      } else {
         params.delete("search");
      }

      replace(`${pathName}?${params.toString()}`);
   }, 300);

   return (
      <div className="max-w-7xl mx-auto px-3 md:px-5 xl:px-0 flex gap-4 flex-col md:flex-row md:items-center md:justify-between pt-7">
         <div className="relative">
            <SearchIcon
               size={18}
               className="absolute top-[31%] left-[10%] text-text transform-[translate(-50%,-50%)]"
            />
            <input
               type="search"
               placeholder="Search for a country..."
               className="w-full h-full bg-nav-bg text-text outline-transparent py-3 pl-16 pr-10 rounded shadow-md shadow-nav-bg"
               onChange={(e) => handleSearch(e.target.value)}
               defaultValue={searchParams.get("search")?.toString()}
            />
         </div>

         <Filter />
      </div>
   );
}

function Filter() {
   const searchParams = useSearchParams();
   const pathName = usePathname();
   const searchTerm = searchParams.get("search");
   const filter = searchParams.get("filter");

   const regions = ["", "africa", "americas", "asia", "europe", "oceania"];

   return (
      <div className="relative block group">
         <button className="w-[175px] bg-nav-bg text-text flex items-center gap-2 shadow-md shadow-nav-bg py-2 px-3 rounded">
            <p>Filter By Region</p>
            <ChevronDown className="transition-all group-hover:rotate-180" />
         </button>
         <div className="hidden absolute bg-nav-bg text-text w-[172px] m-[1px] shadow-md shadow-nav-bg z-10 group-hover:block rounded">
            {regions.map((region) => (
               <Link
                  key={region}
                  href={`${pathName}?${
                     searchTerm
                        ? `filter=${
                             region === "" ? "" : region
                          }&search=${searchTerm}`
                        : `filter=${region === "" ? "" : region}`
                  }`}
                  className={`${
                     filter === region ? "bg-text text-nav-bg" : ""
                  } py-2 px-3 block hover:bg-text hover:text-nav-bg transition`}
               >
                  {region === "" ? "All" : uppercase(region)}
               </Link>
            ))}
         </div>
      </div>
   );
}
