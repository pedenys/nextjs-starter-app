import { Global, css } from '@emotion/core'

const globalCss = css`
  html {
    box-sizing: border-box;
    font-size: 10px;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 100%;
    font-size: 40px;
    color: hotpink;
  }
`

const GlobalTheme: React.FC = () => <Global styles={globalCss} />

export default GlobalTheme
