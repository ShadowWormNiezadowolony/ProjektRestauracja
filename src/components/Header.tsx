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
  const [shadowState, setShadowState] = useState(0);

  useEffect(() => {
    setShadowState(window.scrollY);

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler() {
    setShadowState(window.scrollY);
  }

  return (
    <header
      className={`bg-white border-none m-0 flex items-center justify-between p-3 md:p-6 w-screen sticky top-0 z-2 ${shadowState ? "shadow-lg" : "shadow-none"} transition-shadow duration-200`}
    >
      <div className="w-[33%]">
        <Link className="float-left" href="/">
          <Image
            className="hover:opacity-50"
            src="/menu.svg"
            alt="ikona menu"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="w-[33%] flex items-center justify-center">
        <Link href="/">
          <p className="text-yellow-500 md:text-xl font-bold tracking-tight hidden md:inline-block">
            WcDonalds
          </p>
          <Image
            className="hover:opacity-50 inline-block md:hidden"
            src="/icon.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="w-[33%]">
        <ul className="float-right items-center gap-4 font-semibold text-black hidden md:inline-flex">
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
        <button
          onClick={() => window.alert("Brak implementacji")}
          className="float-right cursor-pointer inline-block md:hidden"
        >
          <Image
            className="hover:opacity-50"
            src="/dostawa.svg"
            alt="Dostawa"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
}
