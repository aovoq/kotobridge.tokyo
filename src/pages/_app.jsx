import { createContext, useEffect, useState } from 'react'
import '../styles/globals.css'

const ColorThemeScript = () => (
   <script
      dangerouslySetInnerHTML={{
         __html: `
            (function () {
               let theme
               const storageTheme = window.localStorage.getItem('theme')
               if (storageTheme !== null) {
                  theme = storageTheme
               } else {
                  const mql = window.matchMedia('(prefers-color-scheme: dark)')
                  theme = mql.matches ? 'dark' : 'light'
               }

               const root = document.documentElement
               root.setAttribute('data-theme', theme)
            })()
         `,
      }}
   />
)

export const ColorThemeContext = createContext(undefined)

const ColorThemeProvider = ({ children }) => {
   const [colorMode, setColorMode] = useState(undefined)
   useEffect(() => {
      const root = window.document.documentElement
      const initialColorValue = root.getAttribute('data-theme')
      setColorMode(initialColorValue)
   }, [])

   const changeColorMode = (theme) => {
      let newTheme = colorMode === 'dark' ? 'light' : 'dark'
      if (theme) {
         newTheme = theme
      }

      setColorMode(newTheme)

      const root = window.document.documentElement
      root.setAttribute('data-theme', newTheme)
   }

   useEffect(() => {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const listener = (e) => {
         changeColorMode(e.matches ? 'dark' : 'light')
      }
      mql.addEventListener('change', listener)
   }, [])

   return <ColorThemeContext.Provider value={{ colorMode, changeColorMode }}>{children}</ColorThemeContext.Provider>
}

const MyApp = ({ Component, pageProps }) => {
   return (
      <>
         <ColorThemeScript />
         <ColorThemeProvider>
            <Component {...pageProps} />
         </ColorThemeProvider>
      </>
   )
}

export default MyApp
