import React from 'react'

const SocialMedias: React.VFC = () => {
  return (
    <>
      <meta
        name="application-name"
        content={process.env.NEXT_PUBLIC_APP_NAME}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={process.env.NEXT_PUBLIC_APP_NAME}
      />
      <meta
        name="description"
        content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />

      <meta
        name="twitter:card"
        content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
      />
      <meta name="twitter:url" content={process.env.NEXT_PUBLIC_APP_DOMAIN} />
      <meta name="twitter:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
      <meta
        name="twitter:description"
        content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
      />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/icons/android-chrome-192x192.png`}
      />
      <meta
        name="twitter:creator"
        content={`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={process.env.NEXT_PUBLIC_APP_NAME} />
      <meta
        property="og:description"
        content={process.env.NEXT_PUBLIC_APP_DESCRIPTION}
      />
      <meta
        property="og:site_name"
        content={process.env.NEXT_PUBLIC_APP_NAME}
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_DOMAIN} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_APP_DOMAIN}/icons/apple-touch-icon.png`}
      />
    </>
  )
}

export default SocialMedias
