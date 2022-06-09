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

const Item = styled.div`
   position: relative;
   display: inline-block;
   margin-left: 500px;
   top: calc(50% - 330px / 2);
`
const ImgWrapper = styled.div`
   display: inline-block;
   position: relative;
   width: 550px;
   height: 330px;
   overflow: hidden;
`
const Test = styled.div`
   background-image: url('images/kiyosu-bridge.jpg');
   position: absolute;
   left: -100px;
   width: 750px;
   height: 100%;
   background-size: cover;
   background-position: center;
`

const Home = () => {
   const screenRef = useRef(null)
   let images
   let imageWidth
   let current = 0
   let target = 0
   let limit = 0
   let request
   let stop = false
   const router = useRouter()

   const _lerp = (start, end, t) => {
      return start * (1 - t) + end * t
   }

   const _clamp = (min, max, value) => {
      return value < min ? min : value > max ? max : value
   }

   const addEventListeners = () => {
      screenRef.current.addEventListener('mousewheel', onScroll)
      window.addEventListener('resize', init)
   }

   const removeEventListeners = () => {
      screenRef.current.removeEventListener('mousewheel', onScroll, { passive: false })
      window.removeEventListener('resize', init)
      document.addEventListener(
         'touchmove',
         (e) => {
            e.preventDefault()
         },
         { passive: false },
      )
   }

   const parallaxImages = () => {
      const ratio = current / 1400
      let intersectionRatioValue

      images.forEach((img, idx) => {
         intersectionRatioValue = ratio - idx * 0.7
         img.style = `transform: translate3d(${intersectionRatioValue * 70}px, 0, 0)`
      })
   }

   const update = () => {
      if (stop) {
         cancelAnimationFrame(request)
         return
      }
      console.log('update')
      target = _clamp(0, limit, target)
      current = _lerp(current, target, 0.075).toFixed(2)
      if (current < 0.1) {
         current = 0
      }
      screenRef.current.style = `transform: translate3d(-${current}px, 0, 0)`
      parallaxImages()
      request = requestAnimationFrame(update)
   }

   const init = () => {
      limit = screenRef.current.getBoundingClientRect().width - window.innerWidth
      images = [...document.querySelectorAll('.bridgeImg')]
      update()
   }

   const onScroll = (event) => {
      const normalized = normalizeWheel(event)
      target += normalized.pixelY
   }

   const pageChangeHandler = () => {
      console.log('stop')
      stop = true
      removeEventListeners()
   }

   useEffect(() => {
      addEventListeners()
      init()
      router.events.on('routeChangeStart', pageChangeHandler)
      return () => {
         router.events.off('routeChangeStart', pageChangeHandler)
      }
   }, [])

   return (
      <Layout home>
         <GlobalStyles />
         <Container>
            <Screen ref={screenRef}>
               <Item>
                  <Link href='/bridge/kiyosu-bridge'>
                     <a>
                        <ImgWrapper>
                           <Test src='images/kiyosu-bridge.jpg' className='bridgeImg' />
                        </ImgWrapper>
                     </a>
                  </Link>
               </Item>
               <Item>
                  <Link href='/bridge/kiyosu-bridge'>
                     <a>
                        <ImgWrapper>
                           <Test src='images/kiyosu-bridge.jpg' className='bridgeImg' />
                        </ImgWrapper>
                     </a>
                  </Link>
               </Item>
               <Item>
                  <Link href='/bridge/kiyosu-bridge'>
                     <a>
                        <ImgWrapper>
                           <Test src='images/kiyosu-bridge.jpg' className='bridgeImg' />
                        </ImgWrapper>
                     </a>
                  </Link>
               </Item>
               <Item>
                  <Link href='/bridge/kiyosu-bridge'>
                     <a>
                        <ImgWrapper>
                           <Test src='images/kiyosu-bridge.jpg' className='bridgeImg' />
                        </ImgWrapper>
                     </a>
                  </Link>
               </Item>
               <Item>
                  <Link href='/bridge/kiyosu-bridge'>
                     <a>
                        <ImgWrapper>
                           <Test src='images/kiyosu-bridge.jpg' className='bridgeImg' />
                        </ImgWrapper>
                     </a>
                  </Link>
               </Item>
               <Item>
                  <Link href='/bridge/kiyosu-bridge'>
                     <a>
                        <ImgWrapper>
                           <Test src='images/kiyosu-bridge.jpg' className='bridgeImg' />
                        </ImgWrapper>
                     </a>
                  </Link>
               </Item>
               {/* <Text>1</Text>
               <BridgeImage className='image' />
               <Text>2</Text>
               <BridgeImage className='image' />
               <Text>3</Text>
               <BridgeImage className='image' />
               <Text>4</Text>
               <BridgeImage className='image' />
               <Text>5</Text>
               <BridgeImage className='image' />
               <Text>6</Text> */}
            </Screen>
         </Container>
      </Layout>
   )
}

export default Home
