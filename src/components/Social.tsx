import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

export function Social() {
  return (
    <ul className="[&>li]:mx-[10px] [&>li]:my-0 flex items-center justify-center">
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
  );
}
