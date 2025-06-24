export function Baner({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div
      id="baner"
      className="bg-[url(/baner.png)] w-full h-[50vh] md:h-[40vh] bg-no-repeat bg-cover bg-center flex items-baseline-last"
    >
      {children}
    </div>
  );
}
