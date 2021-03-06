import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'
import { ThemeContext } from '../lib/theme-provider'
import { useContext } from 'react'
import Catch from './catch'

const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 27px;
   height: 36px;
   font-size: 20px;
   font-weight: 500;
   padding: 0 6px;
   color: var(--gray);
   z-index: 999;
   @media (max-width: 768px) {
      display: none;
   }
`

const IconWrapper = styled.div`
   cursor: pointer;
   position: relative;
   width: 24px;
   height: 24px;
   z-index: 0;
   svg {
      transition: 0.3s ease;
      fill: rgba(0,0,0,0);
   }
   svg:hover {
      stroke: var(--accent);
      fill: var(--accent);
   }
   &.active {
      svg:hover {
         stroke: var(--gray);
         fill: none;
      }
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

   return (
      <Container>
         <IconWrapper
            onClick={() => {
               theme.changeTheme('light')
            }}
            className={theme.theme === 'light' && 'active'}>
            <Sun size={24} />
            <Catch home />
         </IconWrapper>
         <span>/</span>
         <IconWrapper
            onClick={() => {
               theme.changeTheme('dark')
            }}
            className={theme.theme === 'dark' && 'active'}>
            <Moon size={24} />
         </IconWrapper>
      </Container>
   )
}

export default ThemeSwitcher
