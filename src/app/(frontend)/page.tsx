import { Baner } from "@/components/Baner";
import { Menu } from "@/components/Menu";
import { NavBar } from "@/components/NavBar";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Page() {
  const { data: products } = await sanityFetch({ query: CATEGORY_QUERY });

  return (
    <>
      <Baner />
      <NavBar />
      <Menu dane={products} />
    </>
  );
}
