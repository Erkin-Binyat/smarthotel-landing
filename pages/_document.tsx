import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({params}: any) {
  
  return (
    <Html lang={params}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }, { lang: "tm"}]
};