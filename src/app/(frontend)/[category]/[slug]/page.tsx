import { ReturnButton } from "@/components/ReturnButton";
import { notFound } from "next/navigation";
import { PRODUCT_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { MenuItem } from "@/components/MenuItem";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

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

  if (!Product) {
    notFound();
  }

  return (
    <main>
      <ReturnButton />
      <div>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w-full md:w-4/10 text-4xl font-bold p-1 xl:p-3 xl:pl-[8%] md:flex md:items-baseline-last text-center">
            {Product.product?.subtitle}
          </div>

          <div className="w-full font-medium md:w-5/10 text-xl xl:text-lg p-3 pt-7 xl:p-9 xl:pr-[10%] md:flex md:items-baseline text-center md:text-right">
            {Product.product?.description}
          </div>
        </div>

        <div className="w-full bg-[url(/bg_2.png)] bg-center bg-no-repeat bg-cover">
          <Image
            className="mx-auto"
            src={
              Product.product?.mainImage
                ? urlFor(Product.product.mainImage)
                    .height(650)
                    .width(650)
                    .quality(80)
                    .auto("format")
                    .url()
                : "/placeholder.png"
            }
            alt={Product.product?.mainImage?.alt || "obraz"}
            height={650}
            width={650}
          />
        </div>
      </div>
      <div className="w-full text-center font-medium">
        <h1 className="font-bold w-full py-8 text-4xl">
          Informacje o produkcie
        </h1>

        <div className="grid grid-cols-2">
          <div className="text-2xl">
            <h2 className="font-bold text-3xl">Nazwa:</h2>
            {Product.product?.name || "brak danych"}
          </div>

          <div className="text-2xl">
            <h2 className="font-bold text-3xl">
              Cena:
            </h2>
            {Product.product?.price
                ? Product.product.price + "zł"
                : "brak danych"}
          </div>

          <div className="text-2xl">
            <h2 className="font-bold text-3xl">
              Kalorie:
            </h2>
            {Product.product?.calories
                ? Product.product.calories + "kcal"
                : "brak danych"}
          </div>
        </div>

      </div>
      <section>
        <h2 className="font-bold pl-5 md:pl-20 py-8 text-4xl">Inne Produkty</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6">
          {Product.OtherProducts.map((item: any) => (
            <MenuItem key={item._id} Item={item} Category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
