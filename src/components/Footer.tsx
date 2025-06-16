import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white text-black p-4 flex items-center justify-between container">
      <p className="">WcDonalds</p>

      <ul className="uppercase font-bold text-black">
        <li><Link href="/">Nasze Menu</Link></li>
        <li><Link href="/">Restauracje</Link></li>
        <li><Link href="/">Dla rodziny</Link></li>
        <li><Link href="/">Franczyza</Link></li>
        <li><Link href="/">Aplikacja</Link></li>
        <li><Link href="/">Dostawa</Link></li>
        <li><Link href="/">O firmie</Link></li>
      </ul>

      <ul className="text-black">
        <li><Link href="/">Regulaminy</Link></li>
        <li><Link href="/">Tabela wartości odżywczych</Link></li>
        <li><Link href="/">Franczyza</Link></li>
        <li><Link href="/">Ochrona prywatności</Link></li>
        <li><Link href="/">Ograniczenia menu</Link></li>
        <li><Link href="/">Centrum Pomocy</Link></li>
      </ul>

      <ul className="[&>li]:mx-[10px] [&>li]:my-0">
        <li>
          <Link
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook className="size-8" />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="size-8" />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.youtube.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaYoutube className="size-8" />
          </Link>
        </li>

        <li>
          <Link
            href="https://linkedin.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="size-8" />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.tiktok.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTiktok className="size-8" />
          </Link>
        </li>
      </ul>

      <p className="clear-both">
        &copy; {new Date().getFullYear()} prawa autorskie należą do McDonald’s Corporation, a nie do mnie.
      </p>

      <p className="clear-both">Strona utworzona w celach nauki programowania na podstawie strony menu mcdonalda</p>
    </footer>
  );
}
