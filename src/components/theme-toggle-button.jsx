import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'
import { ThemeContext } from '../lib/theme-provider'
import { useContext } from 'react'

const Container = styled.div`
   cursor: pointer;
   position: relative;
   width: 24px;
   height: 24px;
   svg {
      position: absolute;
      animation: show 0.8s 0s forwards;
      transition: 0.5s;
      fill: rgba(0, 0, 0, 0);
      &:hover {
         fill: var(--base-color);
      }
      @keyframes show {
         from {
            top: -100%;
            opacity: 0;
         }
         to {
            top: 0;
            opacity: 1;
         }
      }
   }
   .hidden {
      animation: hidden 0.8s 0s forwards;
      @keyframes hidden {
         from {
            top: 0;
            opacity: 1;
         }
         to {
            top: 100%;
            opacity: 0;
         }
      }
   }
`

const ThemeToggleButton = () => {
   const { theme, changeTheme } = useContext(ThemeContext)
   return (
      <Container
         onClick={() => {
            changeTheme()
         }}>
         <Moon size={24} className={`${theme === 'dark' ? 'hidden' : ''}`} />
         <Sun size={24} className={`${theme === 'light' ? 'hidden' : ''}`} />
      </Container>
   )
}

export default ThemeToggleButton
