import Layout from '../components/layout'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import normalizeWheel from 'normalize-wheel'
import { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const GlobalStyles = createGlobalStyle`
   body {
      overscroll-behavior: none;
   }
`

const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
`

const Screen = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   /* width: 2000px; */
   height: 100%;
   white-space: nowrap;
`

const BridgeImage = styled.div`
   position: relative;
   top: calc(50% - 337.5px / 2);
   display: inline-block;
   transform: translate3d(0, -15vh, 0);
   &:not(:first-child) {
      margin-left: 40vh;
   }
`
const Text = styled.div`
   display: inline-block;
`

const Home = () => {
   const screenRef = useRef(null)

   const _lerp = (start, end, t) => {
      return start * (1 - t) + end * t
   }

   const _clamp = (min, max, value) => {
      return value < min ? min : value > max ? max : value
   }

   let current = 0
   let target = 0
   let limit = 0

   const addEventListeners = () => {
      screenRef.current.addEventListener('mousewheel', onScroll)
      window.addEventListener('resize', init)
   }

   const update = () => {
      target = _clamp(0, limit, target)
      current = _lerp(current, target, 0.075).toFixed(2)
      if(current < 0.1){
         current = 0
      }
      screenRef.current.style = `transform: translate3d(-${current}px, 0, 0)`
      requestAnimationFrame(update)
   }

   const init = () => {
      limit = screenRef.current.getBoundingClientRect().width - window.innerWidth
      update()
   }

   const onScroll = (event) => {
      const normalized = normalizeWheel(event)
      target += normalized.pixelY
   }

   useEffect(() => {
      addEventListeners()
      init()
   }, [])

   return (
      <Layout home>
         <Container>
            <Screen ref={screenRef}>
               <BridgeImage className='image'></BridgeImage>
               <Text>1</Text>
               <BridgeImage className='image'></BridgeImage>
               <Text>2</Text>
               <BridgeImage className='image'></BridgeImage>
               <Text>3</Text>
               <BridgeImage className='image'></BridgeImage>
               <Text>4</Text>
               <BridgeImage className='image'></BridgeImage>
               <Text>5</Text>
               <BridgeImage className='image'></BridgeImage>
               <Text>6</Text>
            </Screen>
         </Container>
      </Layout>
   )
}

export default Home
