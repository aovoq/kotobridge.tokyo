import styled from 'styled-components'

const AppHeader = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 40px;
   width: 100%;
   padding: 0 60px;
   margin-top: 40px;
   color: var(--color1);
`

const Logo = styled.div`
   height: 40px;
   img {
      height: 100%;
   }
`

const NavLink = styled.ul`
   display: flex;
   gap: 80px;
   font-size: 20px;
   text-transform: uppercase;
   font-weight: 600;
   letter-spacing: 0.2em;
`

const Header = () => {
   return (
      <AppHeader>
         <Logo>
            <img src='/images/kotobridge_logo.svg' alt='kotoBridge' />
         </Logo>
         <NavLink>
            <li>susume</li>
            <li>map</li>
            <li>list</li>
         </NavLink>
      </AppHeader>
   )
}

export default Header
