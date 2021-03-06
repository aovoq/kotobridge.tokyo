import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../public/images/kotobridge_logo.svg'
import ThemeToggleButton from './theme-toggle-button'

const AppHeader = styled.header`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   /* height: 40px; */
   width: 100%;
   padding: 40px 60px 0;
   top: 0;
   padding-top: 40px;
   color: var(--base-color);
   z-index: 999;
   @media (max-width: 768px) {
      padding: 40px 40px 0;
   }
`

const LogoWrapper = styled.div`
   height: 40px;
   svg {
      fill: var(--base-color);
      height: 100%;
   }
`

const NavLink = styled.ul`
   display: flex;
   gap: 40px;
   font-size: 20px;
   text-transform: uppercase;
   font-weight: 500;
   letter-spacing: 0.4em;
   @media (max-width: 768px) {
      display: none;
   }
   a {
      position: relative;
   }
   a::before {
      content: '';
      position: absolute;
      width: 95%;
      height: 2px;
      border-radius: 2px;
      background-color: var(--base-color);
      left: 0;
      bottom: -2px;
      transform-origin: center;
      transform: scaleX(0);
      transition: transform .2s ease-in-out;
   }
   a:hover::before {
      transform: scaleX(1);
   }
`

const MobileHead = styled.div`
   @media (min-width: 768px) {
      display: none;
   }
`

const Header = ({ home }) => {
   return (
      <AppHeader>
         <LogoWrapper>
            <Link href='/'>
               <a>
                  <Logo title='kotoBridge' titleid='kotoBridge' />
               </a>
            </Link>
         </LogoWrapper>
         <NavLink>
            <Link href='/susume'>
               <a>
                  <li>susume</li>
               </a>
            </Link>
            {!home && <ThemeToggleButton />}
         </NavLink>
         <MobileHead>
            <ThemeToggleButton />
         </MobileHead>
      </AppHeader>
   )
}

export default Header
