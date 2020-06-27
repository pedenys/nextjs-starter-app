import App from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { AppTheme } from '../theme'
import GlobalTheme from '../theme/GlobalTheme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={AppTheme}>
        <Component {...pageProps} />
        <GlobalTheme />
      </ThemeProvider>
    )
  }
}

export default MyApp
