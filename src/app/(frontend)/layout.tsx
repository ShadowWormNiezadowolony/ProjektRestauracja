import { SanityLive } from "@/sanity/lib/live";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SanityLive />
    </>
  );
}
