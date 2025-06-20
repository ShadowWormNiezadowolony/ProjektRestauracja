import { MenuItem } from "@/components/MenuItem";

export function MenuSection({
  items,
  category,
}: {
  items: any;
  category: string;
}) {
  const filteredItems: any = items.filter((item: any) =>
    item.categoriesSlugs.includes(category)
  );

  return (
    <section>
      <h2>{category}</h2>
      {filteredItems.map((item: any) => (<MenuItem key={item._id} item={item} />))} 
    </section>
  );
}
