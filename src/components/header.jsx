import Link from 'next/link'
import styled from 'styled-components'
import Logo from '../../public/images/kotobridge_logo.svg'

const AppHeader = styled.header`
   position: absolute;
   top: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 40px;
   width: 100%;
   padding: 0 60px;
   color: var(--color1);
`

const LogoWrapper = styled.div`
   height: 40px;
   svg {
      fill: var(--color1);
      height: 100%;
   }
`

const NavLink = styled.ul`
   display: flex;
   gap: 80px;
   font-size: 20px;
   text-transform: uppercase;
   font-weight: 500;
   letter-spacing: 0.4em;
`

const Header = () => {
   return (
      <AppHeader>
         <LogoWrapper>
            <Link href='/'>
               <a>
                  <Logo title='kotoBridge' titleId='kotoBridge' />
               </a>
            </Link>
         </LogoWrapper>
         <NavLink>
            <Link href='/susume'>
               <a>
                  <li>susume</li>
               </a>
            </Link>
            <li>map</li>
            <li>list</li>
         </NavLink>
      </AppHeader>
   )
}

export default Header
