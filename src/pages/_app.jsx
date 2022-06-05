import { ThemeProvider } from '../lib/theme-provider'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
   return (
      <ThemeProvider>
         <Component {...pageProps} />
      </ThemeProvider>
   )
}

export default MyApp
