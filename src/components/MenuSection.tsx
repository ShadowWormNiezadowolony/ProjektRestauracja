import { MenuItem } from "@/components/MenuItem";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export function MenuSection({
  items,
  categorySlug,
  categoryName,
}: {
  items: SanityAsset;
  categorySlug: string;
  categoryName: string;
}) {
  const filteredItems: SanityAsset = items.filter((item: SanityAsset) =>
    item.categoriesSlugs.includes(categorySlug)
  );

  return (
    <section className="scroll-mt-[140px]" id={categorySlug}>
      <h2 className="font-bold  pl-5 md:pl-20 py-8 text-4xl">{categoryName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6">
        {filteredItems.map((item: SanityAsset) => (
          <MenuItem key={item._id} Item={item} Category={categorySlug} />
        ))}
      </div>
    </section>
  );
}
