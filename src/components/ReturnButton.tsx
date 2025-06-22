"use client";
import Link from "next/link";
import { useState, useEffect} from "react";

export function ReturnButton() {
  const [shadowState, setShadowState] = useState(0);

   useEffect(() => {
    setShadowState(window.scrollY);

    window.addEventListener("scroll",scrollHandler)

    return () => {
      window.removeEventListener("scroll",scrollHandler);
    };
  }, []);

   function scrollHandler() {
    setShadowState(window.scrollY);
  }

  return (
    <div className={`font-bold text-center text-md lg:text-xl pl-0 p-2 w-3xs lg:w-xs border-none ${shadowState > 0 ? "shadow-[0_4px_3px_0px_rgba(0,0,0,0.6)]" : "shadow-none"}  bg-white fixed z-2 rounded-br-4xl hidden md:inline-block transition-shadow duration-200`}>
      <Link href="/">
        <span className="font-extrabold">&lt;</span>
        <span className="font-medium pl-2">Wróc na</span> stronę główną
      </Link>
    </div>
  );
}
