import { SanityLive } from "@/sanity/lib/live";
import { Header } from "@/components/Header";
import { Baner } from "@/components/Baner";
import { Footer } from "@/components/Footer";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Baner />
      {children}
      <Footer />
      <SanityLive />
    </>
  );
}
