import type { Metadata } from "next";
import "./globals.css";
import { Lato } from "next/font/google";
import classNames from "classnames";
import { Typography } from "@/components/Typography/Typography";

export const metadata: Metadata = {
  title: "Fullstack Software Engineer – Lukasz Kurant",
  description: "Fullstack Software Engineer – Lukasz Kurant",
  openGraph: {
    type: "website",
    url: "https://lukaszkurant.com",
    title: "Fullstack Software Engineer – Lukasz Kurant",
    description: "Fullstack Software Engineer",
    siteName: "Lukasz Kurant",
    images: [
      {
        url: "https://lukaszkurant.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const latoFont = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism.css"
        ></link>
      </head>
      <body className={classNames(latoFont.className)}>
        {children}

        <footer>
          <Typography opacity variant="small-paragraph">
            Fully made by Lukasz Kurant, All rights reserved 2024
          </Typography>
        </footer>
      </body>
    </html>
  );
}
