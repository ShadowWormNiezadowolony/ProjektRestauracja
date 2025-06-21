import { MenuItem } from "@/components/MenuItem";

export function MenuSection({
  items,
  categorySlug,
  categoryName,
}: {
  items: any;
  categorySlug: string;
  categoryName: string;
}) {
  const filteredItems: any = items.filter((item: any) =>
    item.categoriesSlugs.includes(categorySlug)
  );

  return (
    <section>
      <h2 className="font-bold pl-20 py-8 text-4xl">{categoryName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6">
        {filteredItems.map((item: any) => (
          <MenuItem key={item._id} Item={item} Category={categorySlug} />
        ))}
      </div>
    </section>
  );
}
