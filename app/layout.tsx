import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import images from '../constants/images';
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

// Defining metadata for the page
export const metadata: Metadata = {
  title: "Figma To Code Challenge Week1 | Digit NFT",
  description: "Participating in Figma to Code Challenge and designing stunning UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={images.logo} />
      </head>
      <body className={raleway.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
