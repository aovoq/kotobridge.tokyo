import styled from 'styled-components'
import Header from './header'
import ThemeSwitcher from './theme-switcher'

const Footer = styled.footer`
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

const Layout = ({ children, home }) => {
   return (
      <>
         <Header />
         <Main>{children}</Main>
         {home && (
            <Footer>
               <ThemeSwitcher />
            </Footer>
         )}
      </>
   )
}

export default Layout
