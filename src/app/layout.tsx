import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
   title: "Travel With Oyeins - Countries Info",
   description: "Frontend mentor challenge by Oyeins",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <Providers>
            <body className="min-h-dvh">{children}</body>
         </Providers>
      </html>
   );
}
