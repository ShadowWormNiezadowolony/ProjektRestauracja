"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export function Header() {
  const [width, setWidth] = useState(0);
  const breakpoint: number = 768;

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
    <header className="bg-white dark:bg-gray-700 shadow-none flex items-center justify-between p-6 w-screen sticky top-0 z-2">
      <div className="w-[33%]">
        <Link className="float-left" href="/">
          <Image className="hover:opacity-50" src="/menu.svg" alt="ikona menu" width={50} height={50} />
        </Link>
      </div>

      <div className="w-[33%] flex items-center justify-center">
        <Link href="/">
          {width > breakpoint ? (
            <p className="text-yellow-500 md:text-xl font-bold tracking-tight">
              WcDonalds
            </p>
          ) : (
            <Image className="hover:opacity-50" src="/icon.svg" alt="Logo" width={50} height={50} />
          )}
        </Link>
      </div>
      <div className="w-[33%]">
        {width > breakpoint ? (
          <ul className="float-right inline-flex items-center gap-4 font-semibold text-black">
            <li>
              <Link
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebook className="size-4"></FaFacebook>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram className="size-4"></FaInstagram>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaYoutube className="size-4"></FaYoutube>
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="size-4"></FaLinkedin>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTiktok className="size-4"></FaTiktok>
              </Link>
            </li>

            <li>
              <button
                className="border-none cursor-pointer bg-amber-400 rounded-2xl px-7 py-1 font-bold uppercase text-sm"
                onClick={() => window.alert("Brak implementacji")}
              >
                Zamów
              </button>
            </li>
          </ul>
        ) : (
          <button
            onClick={() => window.alert("Brak implementacji")}
            className="float-right cursor-pointer"
          >
            <Image className="hover:opacity-50" src="/dostawa.svg" alt="Dostawa" width={50} height={50} />
          </button>
        )}
      </div>
    </header>
  );
}
