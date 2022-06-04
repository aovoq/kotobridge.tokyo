import styled from 'styled-components'
import { Sun, Moon } from 'react-feather'
import { ColorThemeContext } from '../pages/_app'
import { useContext, useEffect, useState } from 'react'

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

const ThemeSelector = () => {
   const colorTheme = useContext(ColorThemeContext)
   const toggleTheme = () => {
      colorTheme.changeColorMode()
   }
   return (
      <Container>
         <IconWrapper onClick={toggleTheme} className={colorTheme.colorMode === 'light' && 'active'}>
            <Sun size={24} />
         </IconWrapper>
         <span>/</span>
         <IconWrapper onClick={toggleTheme} className={colorTheme.colorMode === 'dark' && 'active'}>
            <Moon size={24} />
         </IconWrapper>
      </Container>
   )
}

export default ThemeSelector
