import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function MenuItem({ Item, Category }: { Item: any; Category: string }) {
  //Obrazy powinny być w 850x800px
  return (
    <div className="w-full group m-[1px] border-[1px] border-gray-100 shadow-sm/10">
      <Link href={Category + "/" + Item.slug.current}>
        <div className="w-full overflow-hidden">
          <Image
            className="w-full group-hover:scale-110 transition-transform duration-300"
            src={urlFor(Item.mainImage)
              .height(850)
              .width(800)
              .quality(80)
              .auto("format")
              .url()}
            alt={Item?.mainImage?.alt || "obraz"}
            height={850}
            width={800}
          />
        </div>
        <div className="text-center p-5 group-hover:bg-yellow-500">
          <p className="font-bold">
            {Item.categoriesSlugs.includes("nowosc") ? (
              <span className="bg-yellow-500 group-hover:bg-white p-[2px]">
                Nowość!
              </span>
            ) : null}
            &nbsp;
            {Item.name}
          </p>
        </div>
      </Link>
    </div>
  );
}
