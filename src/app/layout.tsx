import type { Metadata } from "next";
import "./globals.scss";
import { Onest } from "next/font/google";

const onestSans = Onest({
  subsets: ["latin", "cyrillic"],
});

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
      <body className={onestSans.className}>{children}</body>
    </html>
  );
}
