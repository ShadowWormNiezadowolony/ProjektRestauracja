import { defineQuery } from "next-sanity";

//Wszystkie produkty z bazy danych oraz kategorie (Potrzebne do wyświetlenia menu)
export const CATEGORY_QUERY = defineQuery(`{"products": *[_type == "product"][]{
    _id,
    name,
    slug,
    mainImage,
    "categoriesSlugs": categories[]->slug.current
  },
  "categories": *[_type == "category"][]{
    _id,
    name,
    slug,
    priority,
  } | order(priority asc)
}`);

//Dla pojedyńczego produktu po slugu (Potrzebne do wyświetlenia pojedynczego produktu)
export const PRODUCT_QUERY =
  defineQuery(`{"product":*[_type == "product" && slug.current == $slug][0]{
  name,
  subtitle,
  mainImage,
  calories,
  price,
  description
},
"OtherProducts":*[_type == "product" && $category in categories[]->slug.current && slug.current != $slug][]{
  _id,
    name,
    slug,
    mainImage,
    "categoriesSlugs": categories[]->slug.current
}
}`);
