import Head from "next/head"

type AppHeadProps = {
  title?: string
}

const AppHead: React.FC<AppHeadProps> = ({ title }) => (
  <Head>
    {title && <title>{title}</title>}
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
)

export default AppHead
