import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transmissions",
  description: "Transmissions",
  openGraph: {
    title: "Transmissions",
    description: "Transmissions",
    images: [
      {
        url: "/api/metadata",
        width: 600,
        height: 600,
        alt: `tx logo`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
