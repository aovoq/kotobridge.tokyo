import { ThemeProvider } from '../lib/theme-provider'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   transition: color 1s, background 1s;
}

:root {
   --base-color: #7D97B8;
   --accent: #152E71;
   --gray: #666;
   --inactive: #999;
   --index-text-fill: rgba(238, 242, 244, 0.4);
   --bridge-detail-text: #fff;
   --bridge-detail-bg: #152E71;
   --text: #666;
   --white: #fff;
   --bg: #EEF2F4;
   --day: block;
   --night: none;
}

[data-theme='dark'] {
   --accent: #CDDBFF;
   --index-text-fill: transparent;
   --bridge-detail-text: #333;
   --bridge-detail-bg: #fff;
   --white: #A3A3A3;
   --text: #A3A3A3;
   --bg: #2C2E2F;
   --day: none;
   --night: block;
}

html,
body {
   font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   color: var(--text);
   background: var(--bg);
   overscroll-behavior: none;
   overflow-x: hidden;
   height: 100%;
}

#__next {
   height: 100%;
}

a {
   color: inherit;
   text-decoration: none;
   cursor: pointer;
}

img {
   max-width: 100%;
   display: block;
}

h1,h2,h3,h4,h5,h6 {
   font-size: 100%;
   font-weight: normal;
}

ul {
   list-style: none;
}

table {
   border-collapse: collapse;
   border-spacing: 0;
}
`

const MyApp = ({ Component, pageProps }) => {
   return (
      <ThemeProvider>
         <GlobalStyles />
         <Component {...pageProps} />
      </ThemeProvider>
   )
}

export default MyApp
