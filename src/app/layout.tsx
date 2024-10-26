import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
         <ThemeProvider attribute="class">
            <body className="min-h-dvh">{children}</body>
         </ThemeProvider>
      </html>
   );
}
