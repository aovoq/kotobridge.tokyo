import { useEffect, useState } from 'react'
import styled from 'styled-components'
import LogoSVG from '../../public/images/kotobridge_logo.svg'

const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: var(--bg);
   z-index: 99999;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: overlay-fadeout 1.8s 1.8s ease-in both;
   @keyframes overlay-fadeout {
      0% {
         pointer-events: auto;
         opacity: 1;
         visibility: visible;
      }
      1% {
         pointer-events: none;
      }
      100% {
         pointer-events: none;
         visibility: hidden;
         opacity: 0;
      }
   }
`

const Logo = styled.div`
   width: 200px;
   height: 70px;
   background: var(--base-color);
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   position: relative;
   animation: overlay-fadeout 0.7s 1.6s ease-in both;
   svg:nth-of-type(1) {
      fill: transparent;
      stroke: var(--base-color);
      stroke-dasharray: 600;
      animation: svgStroke 2s 0s ease-in both;
   }
   svg:nth-of-type(2) {
      position: absolute;
      width: 200px;
      top: 0;
      left: 0;
      fill: var(--base-color);
      animation: svgFill 1s 0.5s ease-in both;
   }
   @keyframes svgFill {
      0% {
         -webkit-clip-path: inset(0 100% 0 0);
         clip-path: inset(0 100% 0 0);
      }
      100% {
         -webkit-clip-path: inset(0);
         clip-path: inset(0);
      }
   }
   @keyframes svgStroke {
      0% {
         stroke-dashoffset: 600;
      }
      100% {
         stroke-dashoffset: 0;
      }
   }
`

const Loading = () => {
   const [skip, setSkip] = useState(false)

   useEffect(() => {
      if (sessionStorage.getItem('access')) {
         setSkip(true)
         console.log('nikaime')
      } else {
         sessionStorage.setItem('access', 0)
         setSkip(false)
         console.log('hajimete')
      }
   })

   return (
      <>
         {!skip && (
            <Container>
               <Logo>
                  <LogoSVG />
                  <LogoSVG />
               </Logo>
            </Container>
         )}
      </>
   )
}

export default Loading
