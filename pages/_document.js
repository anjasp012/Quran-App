import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#091945] font-poppins tracking-tight leading-relaxed overscroll-none overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
