import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="antialiased overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
