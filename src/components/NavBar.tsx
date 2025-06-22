"use client";

export function NavBar({ kategorie }: { kategorie: any }) {
  return (
    <nav className="overflow-auto p-4 w-full rounded-b-3xl border-none bg-white flex items-center fixed z-2 shadow-lg select-none">
      {kategorie.map((Item: any) => (
        <button
        onClick={()=>{
          document.querySelector("#"+Item.slug.current)?.scrollIntoView({behavior:"smooth", block:"start"});
        }
        }
          className="bg-yellow-500 active:bg-amber-400 active:opacity-100 font-bold mx-1 py-2 px-4 hover:opacity-50 rounded-4xl"
          key={Item.priority}
        >
          {Item.name}
        </button>
      ))}
    </nav>
  );
}
