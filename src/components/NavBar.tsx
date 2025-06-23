"use client";

import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useState, useEffect, useRef } from "react";

export function NavBar({ Kategorie }: { Kategorie: SanityAsset }) {
  const [scrollState, setScrollState] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHeaderOffset(document.querySelector("header")?.offsetHeight ?? 0);
    let banerOffset: number =
      document.querySelector("#baner")?.scrollHeight ?? 0;
    let offset: number = (headerOffset + banerOffset) / 2;

    function scrollHandler() : void {
      const currentScroll = window.scrollY;
      if (currentScroll > offset) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    }

    function offsetHandler() : void {
      setHeaderOffset(document.querySelector("header")?.offsetHeight ?? 0);
      banerOffset = document.querySelector("#baner")?.scrollHeight ?? 0;
      offset = (headerOffset + banerOffset) / 2;
    }

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", offsetHandler);

    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", offsetHandler);
    };
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (navbar) {
      if (scrollState) {
        navbar.style.top = (headerOffset - 1) + "px";
      }
    }
  }, [scrollState, headerOffset]);

  return (
    <nav
      ref={navbarRef}
      className={`overflow-auto p-3 w-full border-none bg-white flex items-center z-2 select-none ${scrollState ? "fixed shadow-lg rounded-b-3xl" : "shadow-none rounded-t-3xl"}`}
    >
      {Kategorie.map((Item: SanityAsset) => (
        <button
          onClick={() => {
            document
              .querySelector("#" + Item.slug.current)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="bg-yellow-500 active:bg-amber-400 active:opacity-100 font-bold mx-1 py-2 px-4 hover:opacity-50 rounded-4xl"
          key={Item.priority}
        >
          {Item.name}
        </button>
      ))}
    </nav>
  );
}
