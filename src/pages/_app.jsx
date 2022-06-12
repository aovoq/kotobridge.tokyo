import { ThemeProvider } from '../lib/theme-provider'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

:root {
   --color1: #7D97B8;
   --gray: #666;
   --inactive: #999;
   --fg: dimgray;
   --bg: #EEF2F4;
}

[data-theme='dark'] {
   --fg: white;
   --bg: #2C2E2F;
}

html,
body {
   padding: 0;
   margin: 0;
   font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   color: var(--fg);
   background: var(--bg);
   transition: color 1s, background 1s;
   overscroll-behavior: none;
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
