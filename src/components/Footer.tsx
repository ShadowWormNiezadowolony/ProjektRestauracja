"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {Social} from "@/components/Social"

export function Footer() {

  const [width, setWidth] = useState(0);
    const breakpointFooter: number = 1280;
  
    useEffect(() => {
      setWidth(window.innerWidth);
  
      window.addEventListener("resize", resizeHandler);
  
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
  
    function resizeHandler() {
      setWidth(window.innerWidth);
    }


  return (
    <footer className="bg-white text-black p-10 pb-0">
      <div className="container flex items-center justify-between flex-wrap flex-col xl:flex-row ">
          <Link href={"/"}>
          <Image
            className="hover:opacity-50"
            src="/logo2.svg"
            alt="logo"
            width={100}
            height={100}
          ></Image>
        </Link>

        {width < breakpointFooter ? (<div className="container"><Social/></div>) : null}

        {width > breakpointFooter ? (<ul className="uppercase grid grid-cols-2 grid-rows-4 gap-3 font-bold text-black">
          <li>
            <Link href="/">Nasze Menu</Link>
          </li>
          <li>
            <Link href="/">Restauracje</Link>
          </li>
          <li>
            <Link href="/">Dla rodziny</Link>
          </li>
          <li>
            <Link href="/">Franczyza</Link>
          </li>
          <li>
            <Link href="/">Aplikacja</Link>
          </li>
          <li>
            <Link href="/">Dostawa</Link>
          </li>
          <li>
            <Link href="/">O firmie</Link>
          </li>
        </ul>):null}

        <ul className="text-black grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 xl:grid-cols-2 xl:grid-rows-3 gap-3">
          <li>
            <Link href="/">Regulaminy</Link>
          </li>
          <li>
            <Link href="/">Tabela wartości odżywczych</Link>
          </li>
          <li>
            <Link href="/">Franczyza</Link>
          </li>
          <li>
            <Link href="/">Ochrona prywatności</Link>
          </li>
          <li>
            <Link href="/">Ograniczenia menu</Link>
          </li>
          <li>
            <Link href="/">Centrum Pomocy</Link>
          </li>
        </ul>

        {width >= breakpointFooter ? (<Social/>) : null}
      </div>

      <div className="w-full text-center m-1 font-bold">
        <p>
          &copy; {new Date().getFullYear()} prawa autorskie należą do McDonald’s
          Corporation.
        </p>
      </div>
          <hr />
      <div className="w-full text-center m-1 font-bold">
        <p>
          Strona utworzona w celach nauki programowania na podstawie strony menu
          mcdonalda
        </p>
      </div>
    </footer>
  );
}
