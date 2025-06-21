import {MenuSection} from "@/components/MenuSection";

export function Menu({dane, kategorie}:{dane: any, kategorie: any}) {
    return (
      <div>
          {kategorie.map((kategoria: any) => (<MenuSection key={kategoria._id} items={dane} categorySlug={kategoria.slug.current} categoryName={kategoria.name} />))}
      </div>
  )
}