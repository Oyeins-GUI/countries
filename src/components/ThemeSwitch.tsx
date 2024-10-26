"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => setMounted(true), []);

   if (!mounted) return null;

   return (
      <button
         onClick={() => setTheme(theme === "light" ? "dark" : "light")}
         className="rounded-full p-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-700/50 outline-transparent flex items-center justify-center"
      >
         {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
         ) : (
            <SunIcon className="h-5 w-5" />
         )}
      </button>
   );
}
