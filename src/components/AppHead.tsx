import Head from 'next/head'

type AppHeadProps = {
  title?: string
}

const AppHead: React.FC<AppHeadProps> = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    {title && <title>{title}</title>}
  </Head>
)

export default AppHead
