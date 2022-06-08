import Head from 'next/head'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import ThemeSwitcher from './theme-switcher'

const BottomNav = styled.footer`
   display: flex;
   justify-content: space-between;
   flex-direction: row-reverse;
   width: 100%;
   padding: 0 60px;
   position: absolute;
   bottom: 50px;
`

const Main = styled.main`
   height: 100%;
`

export const siteTitle = 'kotoBridge'

const Layout = ({ children, home }) => {
   return (
      <>
         <Head>
            <title>{siteTitle}</title>
            <meta name='description'content='江東区の橋を一覧できるウェブサイト。順次追加予定。' />
            <meta name='og:title' content={siteTitle} />
         </Head>
         <Header />
         <Main>{children}</Main>
         {home ? (
            <BottomNav>
               <ThemeSwitcher />
            </BottomNav>
         ) : (
            <Footer />
         )}
      </>
   )
}

export default Layout
