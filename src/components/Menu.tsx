import {MenuSection} from "@/components/MenuSection";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export function Menu({dane, kategorie}:{dane: SanityAsset, kategorie: SanityAsset}) {
    return (
      <div>
          {kategorie.map((kategoria: SanityAsset) => (<MenuSection key={kategoria._id} items={dane} categorySlug={kategoria.slug.current} categoryName={kategoria.name} />))}
      </div>
  )
}