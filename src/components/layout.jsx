import Head from 'next/head'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import ThemeSwitcher from './theme-switcher'
import BurgerButton from './burger-button'
import { useState } from 'react'
import BurgerMenu from './burger-menu'
import { createGlobalStyle } from 'styled-components'

const BottomNav = styled.footer`
   display: flex;
   justify-content: space-between;
   flex-direction: row-reverse;
   width: 100%;
   padding: 0 60px;
   position: absolute;
   bottom: 50px;
`

const StopScroll = createGlobalStyle`
   body { overflow: hidden;}
`

export const siteTitle = 'kotoBridge'

const Layout = ({ children, home }) => {
   const [menuVisibility, setMenuVisibility] = useState(true)

   const toggleMenu = () => {
      setMenuVisibility((prevState) => !prevState)
   }

   return (
      <>
         {!menuVisibility && <StopScroll />}
         <Head>
            <title>
               {siteTitle}
               {home && ' - 江東区で橋巡り'}
            </title>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='description' content='江東区の橋を一覧できるウェブサイト。順次追加予定！あなたも江東区で橋巡りをしてみませんか？' />
            <meta property='og:locale' content='ja' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={siteTitle + ' - 江東区で橋巡り'} />
            <meta property='og:site_name' content={siteTitle + ' - 江東区で橋巡り'} />
            <meta property='og:description' content='江東区の橋を一覧できるウェブサイト。順次追加予定！あなたも江東区で橋巡りをしてみませんか？' />
            <meta property='og:url' content='https://kotobridge.tokyo' />
            <meta property='og:image' content='https://kotobridge.tokyo/share-image.jpg' />
            <meta property='og:image:type' content='image/jpeg' />
            <meta property='og:image:wdige' content='1200' />
            <meta property='og:image:height' content='630' />
            <meta property='og:image:alt' content={siteTitle + ' - 江東区で橋巡り'} />
            <meta property='twitter:card' content='summary_large_image' />
         </Head>
         <Header home={home} />
         <main>{children}</main>
         {home ? (
            <BottomNav>
               <ThemeSwitcher />
            </BottomNav>
         ) : (
            <Footer />
         )}
         {/* <BurgerMenu menuVisibility={menuVisibility} />
         <BurgerButton toggleMenu={toggleMenu} menuVisibility={menuVisibility} /> */}
      </>
   )
}

export default Layout
