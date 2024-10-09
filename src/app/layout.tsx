import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "GetShopTV test task",
  description: "Customer base monetization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
