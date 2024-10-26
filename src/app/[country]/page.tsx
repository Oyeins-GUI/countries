import Image from "next/image";
import Link from "next/link";
import { countriesData } from "@/data";
import Navbar from "@/components/Navbar";
import BackButton from "./components/BackButton";

function getCountryData(countryName: string) {
   const countryData = countriesData.filter(
      (country) =>
         country.alpha3Code.toLowerCase() === countryName ||
         country.name.toLowerCase() === countryName
   );

   if (countryData.length === 0) return [];

   return countryData;
}

export default async function Home({
   params,
}: {
   params: { country: string };
}) {
   const { country } = params;

   try {
      const data = getCountryData(decodeURIComponent(country).toLowerCase())[0];

      return (
         <>
            <Navbar />
            <main className="bg-background text-text">
               <section className="max-w-7xl mx-auto px-3 md:px-5 xl:px-0">
                  <BackButton />
                  <div className="flex flex-col lg:flex-row md:items-center justify-center gap-10 lg:gap-20 px-3 md:px-5 xl:px-0">
                     <div className="flex items-center justify-center shadow-lg shadow-nav-bg">
                        <Image
                           src={data.flags.png}
                           alt="flag"
                           className={`max-w-[480px] aspect-video object-fill`}
                           width={480}
                           height={480}
                           priority
                        />
                     </div>
                     <div className="text-text">
                        <h1 className="font-extrabold text-2xl lg:text-3xl mb-3">
                           {data.name}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 font-bold">
                           <div className="flex flex-col gap-1">
                              <p>
                                 Native Name:{" "}
                                 <span className="font-normal">
                                    {data.nativeName}
                                 </span>
                              </p>
                              <p>
                                 Population:{" "}
                                 <span className="font-normal">
                                    {new Intl.NumberFormat().format(
                                       data.population
                                    )}
                                 </span>
                              </p>
                              <p>
                                 Region:{" "}
                                 <span className="font-normal">
                                    {data.region}
                                 </span>
                              </p>
                              <p>
                                 Sub Region:{" "}
                                 <span className="font-normal">
                                    {data.subregion}
                                 </span>
                              </p>
                              <p>
                                 Capital:{" "}
                                 <span className="font-normal">
                                    {data.capital}
                                 </span>
                              </p>
                           </div>
                           <div className="flex flex-col gap-1">
                              <p>
                                 Top Level Domain:{" "}
                                 <span className="font-normal">
                                    {data.topLevelDomain[0]}
                                 </span>
                              </p>
                              <p>
                                 Currencies:{" "}
                                 {data.currencies &&
                                    data.currencies.map((currency, i) => (
                                       <span
                                          key={currency.code}
                                          className="font-normal"
                                       >
                                          {i === data.currencies.length - 1
                                             ? currency.name
                                             : `${currency.name}, `}
                                       </span>
                                    ))}
                              </p>
                              <p>
                                 Currency Symbols:{" "}
                                 {data.currencies &&
                                    data.currencies.map((currency, i) => (
                                       <span
                                          key={currency.code}
                                          className="font-normal"
                                       >
                                          {i === data.currencies.length - 1
                                             ? currency.symbol
                                             : `${currency.symbol}, `}
                                       </span>
                                    ))}
                              </p>
                              <p>
                                 Languages:{" "}
                                 {data.languages.map((language, i) => (
                                    <span
                                       key={language.name}
                                       className="font-normal"
                                    >
                                       {i === data.languages.length - 1
                                          ? language.name
                                          : `${language.name}, `}
                                    </span>
                                 ))}
                              </p>
                           </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                           {data.borders && (
                              <>
                                 <p className="font-bold">Border Countries:</p>
                                 <div className="flex flex-wrap gap-2">
                                    {data.borders.map((border) => (
                                       <Link
                                          key={border}
                                          href={`/${border}`}
                                          className="bg-nav-bg shadow-md shadow-nav-bg py-2 px-5 rounded"
                                       >
                                          {" "}
                                          {border}
                                       </Link>
                                    ))}
                                 </div>
                              </>
                           )}
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </>
      );
   } catch (error) {
      console.error("Error fetching or parsing API data:", error);
      return <p>Error loading data for {country}</p>;
   }
}
