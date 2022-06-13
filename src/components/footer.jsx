import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../public/images/kotobridge_logo.svg'
import I_Logo from '../../public/images/i_logo.svg'
import F_Logo from '../../public/images/f_logo.svg'
import T_Logo from '../../public/images/t_logo.svg'

const AppFooter = styled.footer`
   width: 100%;
`

const Container = styled.div`
   color: #fff;
   background: #152e71;
   width: 100%;
   height: 500px;
   position: relative;
   @media (max-width: 768px) {
      height: 300px;
   }
`

const Inner = styled.div`
   display: flex;
   justify-content: space-between;
   max-width: 1000px;
   width: 100%;
   height: 100%;
   margin: auto;
   padding: 40px;
   padding-top: 130px;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
   }
`

const Nav = styled.div`
`

const LogoWrapper = styled.div`
   height: 40px;
   svg {
      height: 100%;
      fill: #fff;
   }
   margin-bottom: 40px;
`

const NavList = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 35px;
   font-size: 12px;
   letter-spacing: 0.4em;
   @media (max-width: 768px) {
      display: none;
   }
`

const Contact = styled.div``
const ContactTitle = styled.div`
   font-size: 24px;
   font-weight: 500;
   letter-spacing: 0.4em;
   margin-bottom: 45px;
   padding-top: 12px;
   @media (max-width: 768px) {
      display: none;
   }
`
const ContactContent = styled.div`
   font-size: 12px;
   font-weight: 500;
   letter-spacing: 0.4em;
   margin-bottom: 25px;
   text-transform: uppercase;
   &:nth-of-type(3) {
      padding-bottom: 25px;
      border-bottom: 1px solid #fff;
   }
   @media (max-width: 768px) {
      text-align: center;
      &:nth-of-type(3) {
         padding-bottom: 25px;
         border-bottom: none;
      }
   }
`
const ContactSocials = styled.div`
   display: flex;
   gap: 40px;
   svg {
      width: 29px;
      height: 29px;
   }
   @media (max-width: 768px) {
      justify-content: center;
   }
`

const Copyright = styled.p`
   color: #fff;
   position: absolute;
   bottom: calc(18em + 20px);
   right: calc(1em + 17px);
   line-height: 1;
   transform-origin: right top;
   transform: rotate(-90deg);
   font-size: 12px;
   letter-spacing: 0.4em;
`

const GoTop = styled.div`
   width: 32px;
   margin: 0 auto;
   margin-bottom: 20px;
`
const GoTopText = styled.p`
   font-size: 12px;
   font-weight: 900;
   letter-spacing: 0.345em;
   line-height: 1;
   color: var(--accent);
`
const Arrow = styled.div`
   width: 32px;
   height: 12px;
   border-left: 16px solid transparent;
   border-right: 16px solid transparent;
   border-bottom: 12px solid var(--accent);
`

const Footer = () => {
   const pageTop = () => {
      window.scroll({ top: 0, behavior: 'smooth' })
   }

   return (
      <AppFooter>
         <GoTop onClick={pageTop}>
            <Arrow />
            <GoTopText>TOP</GoTopText>
         </GoTop>
         <Container>
            <Inner>
               <Nav>
                  <LogoWrapper>
                     <Link href='/'>
                        <a>
                           <Logo title='kotoBridge' titleid='kotoBridge' />
                        </a>
                     </Link>
                  </LogoWrapper>
                  <NavList>
                     <li>
                        <Link href='/'>
                           <a>HOME</a>
                        </Link>
                     </li>
                     <li>
                        <Link href='/susume'>
                           <a>SUSUME</a>
                        </Link>
                     </li>
                     <li>MAP</li>
                     <li>LIST</li>
                  </NavList>
               </Nav>
               <Contact>
                  <ContactTitle>CONTACT</ContactTitle>
                  <ContactContent>MANAGER: Ao Hirata</ContactContent>
                  <ContactContent>EMAIL: contact@kotoBridge.tokyo</ContactContent>
                  <ContactSocials>
                     <a>
                        <I_Logo />
                     </a>
                     <a>
                        <F_Logo />
                     </a>
                     <a>
                        <T_Logo />
                     </a>
                  </ContactSocials>
               </Contact>
            </Inner>
            <Copyright>
               <small>&copy; 2022 KotoBridge.tokyo.</small>
            </Copyright>
         </Container>
      </AppFooter>
   )
}

export default Footer
