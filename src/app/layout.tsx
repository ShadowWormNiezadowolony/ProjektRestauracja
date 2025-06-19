import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lokalna Restauracja',
  description: 'Strona stworzona w celu nauki.',
  icons: {
    icon: '/light_mode.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
