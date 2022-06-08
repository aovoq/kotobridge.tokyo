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
`

const Inner = styled.div`
   display: flex;
   justify-content: space-between;
   width: 900px;
   margin: auto;
   padding-top: 130px;
`

const Nav = styled.div`
   padding-left: 72px;
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
`

const Contact = styled.div``
const ContactTitle = styled.div`
   font-size: 24px;
   font-weight: 500;
   letter-spacing: 0.4em;
   margin-bottom: 45px;
   padding-top: 12px;
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
`
const ContactSocials = styled.div`
   display: flex;
   gap: 40px;
   svg {
      width: 29px;
      height: 29px;
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


const Footer = () => {
   return (
      <AppFooter>
         <Container>
            <Inner>
               <Nav>
                  <LogoWrapper>
                     <Link href='/'>
                        <a>
                           <Logo title='kotoBridge' titleId='kotoBridge' />
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
                     <a><I_Logo /></a>
                     <a><F_Logo /></a>
                     <a><T_Logo /></a>
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
