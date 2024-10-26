import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
   return (
      <header className="w-full bg-nav-bg text-text shadow-md shadow-nav-bg">
         <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-3 md:px-5 xl:px-0">
            <Link href="/">
               <h1 className="font-extrabold text-lg md:text-xl">
                  Where in the world?
               </h1>
            </Link>
            <ThemeSwitch />
         </nav>
      </header>
   );
}
