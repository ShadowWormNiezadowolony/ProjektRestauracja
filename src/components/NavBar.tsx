"use client";

import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { useState, useEffect, useRef, useCallback } from "react";

export function NavBar({ Kategorie }: { Kategorie: SanityAsset }) {
  const [scrollState, setScrollState] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [banerOffset, setBanerOffset] = useState(0);
  const [offset, setOffset] = useState(0);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function Offsets(): void {
      setHeaderOffset(document.querySelector("header")?.offsetHeight ?? 0);
      setBanerOffset(document.querySelector("#baner")?.scrollHeight ?? 0);
    }

    Offsets();

    window.addEventListener("resize", Offsets);

    return () => {
      window.removeEventListener("resize", Offsets);
    };
  }, []);

  useEffect(() => {
    setOffset((headerOffset + banerOffset) * 0.4);
  }, [headerOffset, banerOffset]);

  const scrollHandler = useCallback(() => {
    const currentScroll = window.scrollY;
    if (currentScroll > offset) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

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
              .querySelector("#" + Item?.slug?.current)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="bg-yellow-500 active:bg-amber-400 active:opacity-100 font-bold mx-1 py-2 px-4 hover:opacity-50 rounded-4xl"
          key={Item?.priority}
        >
          {Item?.name || "brak danych"}
        </button>
      ))}
    </nav>
  );
}
