import { NextRequest } from "next/server";
import { uppercase } from "@/utils/uppercase";
import countriesData from "../../../data.json";

export async function GET(req: NextRequest) {
   const filter = uppercase(req.nextUrl.searchParams.get("filter"));
   const search = uppercase(req.nextUrl.searchParams.get("search"));

   if (filter === null && search === null) return Response.json(countriesData);

   if (filter === null && search !== null)
      return Response.json(
         countriesData.filter(
            (country) =>
               country.name.includes(search) || country.name === search
         )
      );

   if (filter !== null && search === null)
      return Response.json(
         countriesData.filter((country) => country.region === filter)
      );

   if (filter === null) return Response.json(countriesData);
   if (search === null) return Response.json(countriesData);

   if (filter && search)
      return Response.json(
         countriesData
            .filter((country) => country.region === filter)
            .filter(
               (country) =>
                  country.name.includes(search) || country.name === search
            )
      );

   if (filter)
      return Response.json(
         countriesData.filter((country) => country.region === filter)
      );

   if (search)
      return Response.json(
         countriesData.filter(
            (country) =>
               country.name.includes(search) || country.name === search
         )
      );
}
