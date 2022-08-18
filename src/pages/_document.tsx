import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/logoico.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal"></div>
      </body>
    </Html>
  );
}
