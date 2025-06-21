import { ReturnButton } from "@/components/ReturnButton";
import { notFound } from "next/navigation";
import { PRODUCT_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { MenuItem } from "@/components/MenuItem";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {

  const { data: Product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });

  const category = (await params).category;

  if(!Product) {
    notFound();
  }

  return (
    <main>
      <ReturnButton />
      <section>
        <h2 className="font-bold pl-20 py-8 text-4xl">Inne Produkty</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6">
                {Product.OtherProducts.map((item: any) => (
                  <MenuItem key={item._id} Item={item} Category={category} />
                ))}
              </div>
      </section>
    </main>
  );
}
