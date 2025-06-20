import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function MenuItem({item}: {item: any}) {

    return (
      <div>
        {item.name}
        {item.slug.current}
        {item.categoriesSlugs.map((slug: string, index: number) => (<p key={index}>{slug}</p>))}
        <Image src={urlFor(item.mainImage).height(200).width(200).quality(80).auto("format").url()} alt={item.mainImage?.alt || "obraz"} height={200} width={200}/>
      </div>
  )
}