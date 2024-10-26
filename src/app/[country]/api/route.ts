import { NextRequest, NextResponse } from "next/server";
import countriesData from "../../../../data.json";

export async function GET(
   req: NextRequest,
   { params }: { params: Promise<{ country: string }> }
) {
   try {
      const country = (await params).country;
      const countryName = decodeURIComponent(country).toLowerCase();

      const countryData = countriesData.filter(
         (country) =>
            country.alpha3Code.toLowerCase() === countryName ||
            country.name.toLowerCase() === countryName
      );

      if (countryData.length === 0) {
         return NextResponse.json("Country not found", { status: 404 });
      }

      return NextResponse.json(countryData[0], { status: 200 });
   } catch (error) {
      console.error("Error fetching country data:", error);
      return NextResponse.json("Internal Server Error", { status: 500 });
   }
}
