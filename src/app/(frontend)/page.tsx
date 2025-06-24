import { Baner } from "@/components/Baner";
import { Menu } from "@/components/Menu";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { NavBar } from "@/components/NavBar";

export default async function Page() {
  const { data: Products } = await sanityFetch({ query: CATEGORY_QUERY });

  return (
    <main>
      <Baner><NavBar Kategorie={Products.categories} /></Baner>
      <Menu dane={Products.products} kategorie={Products.categories} />
    </main>
  );
}
