import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  description: "Recipe page app built for Frontend Mentor challenge. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
      </head>
      <body className={"bg-(--tan) antialiased"}>{children}</body>
    </html>
  );
}
