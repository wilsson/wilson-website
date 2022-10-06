import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
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
  )
}