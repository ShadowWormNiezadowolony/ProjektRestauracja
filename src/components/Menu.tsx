import {MenuSection} from "@/components/MenuSection";

export function Menu({dane}:{dane: any}) {

    const menuCategoriesSlugs: string[] = ["nowosc", "burgery", "kurczak" , "salatki" ,"napoje", "dodatki-frytki" ,"desery-lody"];
    return (
      <main>
          {menuCategoriesSlugs.map((slug: string, index: number) => (<MenuSection key={index} items={dane} category={slug} />))}
      </main>
  )
}