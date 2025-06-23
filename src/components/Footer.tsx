import Link from "next/link";
import Image from "next/image";
import { Social } from "@/components/Social";

export function Footer() {
  return (
    <footer className="bg-white text-black p-10 pb-0">
      <div className=" flex items-center justify-between flex-col xl:flex-row ">
        <Link href={"/"}>
          <Image
            className="hover:opacity-50"
            src="/icon.svg"
            alt="logo"
            width={100}
            height={100}
          ></Image>
        </Link>

        <div className=" inline-block xl:hidden">
          <Social />
        </div>

        <ul className="uppercase xl:grid grid-cols-2 grid-rows-4 gap-3 font-bold text-black hidden">
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
        </ul>

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

        <div className="hidden xl:inline-block">
          {" "}
          <Social />{" "}
        </div>
      </div>

      <div className="w-full text-center m-1 font-bold">
        <p>
          &copy; {new Date().getFullYear()} prawa autorskie należą do McDonald’s
          Corporation.
        </p>
      </div>
      <hr />
      <div className="w-full text-center m-1 font-bold">
        <p className="[&>a]:text-blue-500">
          Strona utworzona w celach nauki programowania na podstawie strony menu
          mcdonalda oraz zawiera obrazki ze stron:{" "}
          <Link
            href="https://pngtree.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pngtree
          </Link>
          ,
          <Link
            href="https://pngimg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PNGimg
          </Link>
          ,
          <Link
            href="https://pixabay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixabay
          </Link>
          ,
          <Link
            href="https://www.vecteezy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vecteezy
          </Link>
          ,
          <Link
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels
          </Link>
        </p>
      </div>
    </footer>
  );
}
