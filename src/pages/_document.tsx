import Document, { Html, Head, Main, NextScript } from 'next/document'
import AppHead from '../components/AppHead'

export default class MyDocument extends Document<any> {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#EFEFEF"></meta>
          <link rel="manifest" href="/manifest.json" />
          {/* TODO : add favicons */}
          {/* <link rel="shortcut icon" href="./somewhere" /> */}
          {/* <link rel="apple-touch-icon" href="./somewhere" /> */}
          {/* TODO : update meta description */}
          <meta name="description" content=""></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
