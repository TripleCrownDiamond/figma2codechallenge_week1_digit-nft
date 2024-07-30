import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import images from '../constants/images';
import "./globals.css";

// Importing the "Raleway" font from Google Fonts, with the "latin" subset
const raleway = Raleway({ subsets: ["latin"] });

// Defining metadata for the page
export const metadata: Metadata = {
  title: "Figma To Code Challenge Week1 | Digit NFT", // Page title
  description: "Participating in Figma to Code Challenge and designing stunning UI.", // Page description
};

// Root layout component for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Setting the language of the HTML document to English
    <html lang="en">
      <head>
        <link rel="icon" href={images.logo} /> {/* Adding favicon */}
      </head>
      <body className={raleway.className}>
        <main>
          {children} {/* Rendering children passed as props */}
        </main>
      </body>
    </html>
  );
}
