import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'
import { ThemeContext } from '../lib/theme-provider'
import { useContext, useEffect } from 'react'

const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 27px;
   height: 36px;
   font-size: 20px;
   font-weight: 500;
   padding: 0 6px;
   color: var(--gray);
`

const IconWrapper = styled.div`
   position: relative;
   width: 24px;
   height: 24px;
   z-index: 0;
   &.active {
      &::before {
         content: '';
         position: absolute;
         z-index: -1;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 36px;
         height: 36px;
         border-radius: 50%;
         background: #ccc;
      }
   }
`

const ThemeSwitcher = () => {
   const theme = useContext(ThemeContext)
   const toggleTheme = () => theme.changeTheme()

   return (
      <Container>
         <IconWrapper onClick={toggleTheme} className={theme.theme === 'light' && 'active'}>
            <Sun size={24} />
         </IconWrapper>
         <span>/</span>
         <IconWrapper onClick={toggleTheme} className={theme.theme === 'dark' && 'active'}>
            <Moon size={24} />
         </IconWrapper>
      </Container>
   )
}

export default ThemeSwitcher
