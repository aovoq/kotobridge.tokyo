import { createContext, useEffect, useState } from 'react'

const ThemeScript = () => {
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
         `
      }}
   />
}

export const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState(undefined)

   useEffect(() => {
      const root = window.document.documentElement
      const initialColorValue = root.getAttribute('data-theme')
      setTheme(initialColorValue)
   }, [theme])

   const changeTheme = (argTheme) => {
      let newTheme = theme === 'dark' ? 'light' : 'dark'
      if (argTheme) {
         newTheme = argTheme
      }
      setTheme(newTheme)

      window.localStorage.setItem('theme', newTheme)
      const root = window.document.documentElement
      root.setAttribute('data-theme', newTheme)
   }

   useEffect(() => {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const listener = (e) => {
         changeTheme(e.matches ? 'dark' : 'light')
      }
      mql.addEventListener('change', listener)
      window.addEventListener('storage', event => {
         if (event.storageArea != localStorage) return
         if (event.key === 'theme') {
            const storageTheme = window.localStorage.getItem('theme')
            changeTheme(storageTheme)
         }
      })
   }, [])

   return (
      <ThemeContext.Provider value={{ theme, changeTheme }}>
         <ThemeScript />
         {children}
      </ThemeContext.Provider>
   )
}
