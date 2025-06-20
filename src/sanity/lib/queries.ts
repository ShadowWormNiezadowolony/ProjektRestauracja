import { defineQuery } from "next-sanity";

//Dla każdej kateogrii po przesłanym slugu kategorii (mainImage,slug,name,kategorie) (nie użyte gdyż mogło bybyć nieefektywne przy niskiej ilości obiektów)
// export const CATEGORY_QUERY =
//   defineQuery(`*[_type == "product" && $category in categories[]->slug.current][]{
//   name,
//   slug,
//   mainImage,
//   "categoriesSlugs": categories[]->slug.current
// }`);

//Wszystkie produkty z bazy danych (Potrzebne do wyświetlenia menu)
export const CATEGORY_QUERY =
  defineQuery(`*[_type == "product"][]{
  _id,
  name,
  slug,
  mainImage{
  ...,
    asset->
  },
  "categoriesSlugs": categories[]->slug.current
}`);

//Dla pojedyńczego produktu po slugu (Potrzebne do wyświetlenia pojedynczego produktu)
export const PRODUCT_QUERY =
  defineQuery(`*[_type == "product" && slug.current == $slug][0]{
  name,
  subtitle,
  mainImage{
  ...,
    asset->
  },
  calories,
  price,
  description
}
`);
