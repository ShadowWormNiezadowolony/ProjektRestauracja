import { defineQuery } from "next-sanity";

//Dla każdej kateogrii po przesłanym slugu kategorii (mainImage,slug,name,kategorie)
export const CATEGORY_QUERY =
  defineQuery(`*[_type == "product" && $category in categories[]->slug.current][]{
  name,
  slug,
  mainImage,
  "categoriesSlugs": categories[]->slug.current
}`);

//Dla pojedyńczego produktu po slugu (Potrzebne do wyświetlenia pojedynczego produktu)
export const PRODUCT_QUERY =
  defineQuery(`*[_type == "product" && slug.current == $slug][0]{
  name,
  subtitle,
  mainImage,
  calories,
  price,
  description
}
`);
