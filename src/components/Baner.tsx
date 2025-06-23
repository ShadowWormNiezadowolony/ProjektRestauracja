import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { NavBar } from "./NavBar";

export function Baner({kategorie} : {kategorie:SanityAsset}) {
  return (
      <div id="baner" className="bg-[url(/baner.png)] w-full h-[50vh] md:h-[40vh] bg-no-repeat bg-cover bg-center flex items-baseline-last">
                <NavBar Kategorie={kategorie} />
      </div>
  )
}