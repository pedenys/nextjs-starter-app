import Head from 'next/head'

type AppHeadProps = {
  title?: string
}

const AppHead: React.FC<AppHeadProps> = ({ title }) => (
  <Head>
    {title && <title>{title}</title>}
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#EFEFEF"></meta>
    <link rel="manifest" href="/manifest.json" />
    {/* TODO : add favicons */}
    {/* <link rel="shortcut icon" href="./somewhere" /> */}
    {/* <link rel="apple-touch-icon" href="./somewhere" /> */}
    {/* TODO : update meta description */}
    <meta name="description" content=""></meta>
  </Head>
)

export default AppHead
