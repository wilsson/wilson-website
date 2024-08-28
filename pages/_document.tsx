import {
  Html,
  Head as HeadNext,
  Main,
  NextScript as NextScriptNext,
} from 'next/document';

const Head = HeadNext as any;
const NextScript = NextScriptNext as any;

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#170f1e] selection:bg-purple-200 selection:text-purple-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
