import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../public/images/kotobridge_logo.svg'
import ThemeToggleButton from './theme-toggle-button'

const AppHeader = styled.header`
   position: absolute;
   top: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 40px;
   width: 100%;
   padding: 0 60px;
   color: var(--base-color);
   z-index: 999;
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
