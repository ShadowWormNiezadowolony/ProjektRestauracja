import Link from "next/link";

export function ReturnButton() {
  return (
    <div className="font-bold text-center text-md lg:text-xl pl-0 p-2 w-3xs lg:w-xs border-none shadow-[0_4px_3px_0px_rgba(0,0,0,0.6)] bg-white fixed z-2 rounded-br-4xl hidden md:inline-block">
      <Link href="/">
        <span className="font-extrabold">&lt;</span>
        <span className="font-medium pl-2">Wróc na</span> stronę główną
      </Link>
    </div>
  );
}
