import Layout from '../components/layout'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
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

const Itemx = styled.div`
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

const Upper = styled.div`
   position: relative;
   top: 15%;
   display: flex;
   gap: 240px;
   margin-left: 75px;
`

const Lower = styled.div`
   position: relative;
   top: 25%;
   display: flex;
   gap: 240px;
   margin-left: 458px;
`

const Item = styled.div``
const AnkerWrap = styled.a``
const BridgeImg = styled.div`
   background: url('images/kiyosu-bridge.jpg');
   background-size: cover;
   background-position: center;
   width: 500px;
   height: 281.25px;
`
const OuterText = styled.div`
   color: #152e71;
   font-weight: 900;
   font-size: 36px;
   line-height: 1;
   text-align: right;
   &::before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-top: -4.9px;
   }
`

const ImgWrap = styled.div`
   position: relative;
   line-height: 1.06;

`

const InnerText = styled.div`
   position: absolute;
   bottom: 0;
   right: 0;
   font-size: 80px;
   font-family: 'Noto sans JP';
   font-weight: 800;
   color: rgba(238, 242, 244, 0.6);
   -webkit-text-stroke: 1px #152E71;
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
      document.addEventListener(
         'touchmove',
         (e) => {
            e.preventDefault()
            console.log(e)
         },
         { passive: false },
      )
   }

   const removeEventListeners = () => {
      screenRef.current.removeEventListener('mousewheel', onScroll, { passive: false })
      window.removeEventListener('resize', init)
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
      // parallaxImages()
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
               <Upper>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
               </Upper>
               <Lower>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
                  <Item>
                     <Link href='bridge/kiyosu-bridge'>
                        <AnkerWrap>
                           <ImgWrap>
                              <BridgeImg />
                              <InnerText>清洲橋</InnerText>
                           </ImgWrap>
                           <OuterText>KIYOSU-BRIDGE</OuterText>
                        </AnkerWrap>
                     </Link>
                  </Item>
               </Lower>
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
