import Layout from '../components/layout'
import styled, { createGlobalStyle } from 'styled-components'
import { useEffect, useRef } from 'react'
import normalizeWheel from 'normalize-wheel'
import { useRouter } from 'next/router'
import IndexItem from '../components/index-item'
import { getSortedData } from '../lib/bridges'
import Loading from '../components/index-loading'

const GlobalStyle = createGlobalStyle`
   body {
      @media (min-width: 768px) {
         overflow: hidden;
      }
   }
`

const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   min-height: 100vh;
   min-height: -webkit-fill-available;
   @media (max-width: 768px) {
      position: static;
   }
`

const Screen = styled.div`
   position: relative;
   display: flex;
   top: 0;
   left: 0;
   height: 100%;
   width: max-content;
   white-space: nowrap;
   gap: 64px;
   will-change: transform;
   @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
   }
`

const List = styled.div`
   position: relative;
   top: calc(50% - 10vh);
   height: 20vh;
   display: flex;
   gap: 180px;
   margin: 0 100px;
   will-change: transform;
   @media (max-width: 768px) {
      top: 60px;
      flex-direction: column;
      gap: 60px;
      margin: 0;
      &#second {
         display: none;
      }
   }
`

const Home = ({ allBridgeData }) => {
   const router = useRouter()
   const screenRef = useRef(null)
   let current = 0
   let target = 0
   let limit = 0
   let screenWidth = 0
   let request
   let stop = false
   const upperData = []
   const lowerData = []

   allBridgeData.map((item, idx) => {
      if (idx % 2 === 0) {
         upperData.push(item)
      } else {
         lowerData.push(item)
      }
   })

   const _lerp = (start, end, t) => {
      return start * (1 - t) + end * t
   }

   const _clamp = (min, max, value) => {
      return value < min ? min : value > max ? max : value
   }

   const addEventListeners = () => {
      window.addEventListener('wheel', onScroll, { passive: false })
      window.addEventListener('resize', onResize)
      // document.addEventListener(
      //    'touchmove',
      //    (e) => {
      //       e.preventDefault()
      //    },
      //    { passive: false },
      // )
   }

   const removeEventListeners = () => {
      console.log('removeEventListeners()')
      window.removeEventListener('wheel', onScroll, { passive: false })
      window.removeEventListener('resize', onResize)
   }

   // const update = () => {
   //    if (stop) {
   //       cancelAnimationFrame(request)
   //       return
   //    }
   //    target = _clamp(0, limit, target)
   //    current = _lerp(current, target, 0.075).toFixed(2)
   //    if (current < 0.1) {
   //       current = 0
   //    }
   //    if (document.getElementById('screen') !== null) {
   //       document.querySelector('#screen').style = `transform: translate3d(-${current}px, 0, 0)`
   //    } else {
   //       cancelAnimationFrame(request)
   //       return
   //    }
   //    request = requestAnimationFrame(update)
   // }

   const update = () => {
      if (stop) {
         cancelAnimationFrame(request)
         return
      }
      current = _lerp(current, target, 0.07).toFixed(2)
      console.log(current)

      if (document.getElementById('screen') !== null) {
         const index = (current / screenWidth) * 2
         const multipler = Math.floor(index)
         document.getElementById('first').style.transform = `translate3d(${-current + ( multipler * screenWidth) / 2}px, 0, 0)`
         document.getElementById('second').style.transform = `translate3d(${-current + ( multipler * screenWidth) / 2}px, 0, 0)`
      } else {
         cancelAnimationFrame(request)
         return
      }

      request = requestAnimationFrame(update)
   }

   const onScroll = (event) => {
      if (window.matchMedia('(min-width: 768px)').matches) {
         event.preventDefault()
         const normalized = normalizeWheel(event)
         target += normalized.pixelY
      }
   }

   const onResize = () => {
      if (document.getElementById('screen') !== null) {
         limit = document.getElementById('screen').getBoundingClientRect().width - window.innerWidth
         screenWidth = document.getElementById('screen').getBoundingClientRect().width
      }
   }

   const handleRouteChange = () => {
      stop = true
      removeEventListeners()
   }

   useEffect(() => {
      addEventListeners()
      onResize()
      update()
      router.events.on('routeChangeStart', handleRouteChange)
      return () => {
         router.events.off('routeChangeStart', handleRouteChange)
      }
   }, [])

   return (
      <Layout home>
         <GlobalStyle />
         <Loading />
         <Container>
            <Screen ref={screenRef} id='screen'>
               <List id='first'>
                  {allBridgeData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
               </List>
               <List id='second'>
                  {allBridgeData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
               </List>
            </Screen>
         </Container>
      </Layout>
   )
}

export const getStaticProps = async () => {
   const allBridgeData = getSortedData()
   return {
      props: {
         allBridgeData,
      },
   }
}

export default Home
