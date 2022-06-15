import Layout from '../components/layout'
import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import normalizeWheel from 'normalize-wheel'
import { useRouter } from 'next/router'
import IndexItem from '../components/index-item'
import { getSortedData } from '../lib/bridges'
import Loading from '../components/index-loading'

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
   display: inline-block;
   top: 0;
   left: 0;
   height: 100%;
   white-space: nowrap;
   gap: 64px;
   will-change: transform;
   @media (max-width: 768px) {
      width: 100%;
   }
`

const List = styled.div`
   position: relative;
   top: calc(50% - 10vh);
   height: 20vh;
   display: flex;
   gap: 180px;
   margin: 0 100px;
   @media (max-width: 768px) {
      top: 120px;
      flex-direction: column;
      gap: 60px;
      margin: 0;
   }
`

const Home = ({ allBridgeData }) => {
   const router = useRouter()
   const screenRef = useRef(null)
   let images
   let current = 0
   let target = 0
   let limit = 0
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
      window.addEventListener('resize', init)
      document.addEventListener(
         'touchmove',
         (e) => {
            e.preventDefault()
         },
         { passive: false },
      )
   }

   const removeEventListeners = () => {
      console.log('revemoEventListener')
      window.removeEventListener('wheel', onScroll, { passive: false })
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
      target = _clamp(0, limit, target)
      current = _lerp(current, target, 0.075).toFixed(2)
      if (current < 0.1) {
         current = 0
      }
      if (document.querySelector('#screen') !== null) {
         document.querySelector('#screen').style = `transform: translate3d(-${current}px, 0, 0)`
      } else {
         cancelAnimationFrame(request)
         return
      }
      // parallaxImages()
      request = requestAnimationFrame(update)
   }

   const init = () => {
      console.log('init')
      limit = screenRef.current.getBoundingClientRect().width - window.innerWidth
      images = [...document.querySelectorAll('.bridgeImg')]
      update()
   }

   const onScroll = (event) => {
      if (window.matchMedia('(min-width: 768px)').matches) {
         event.preventDefault()
         console.log('onScroll')
         const normalized = normalizeWheel(event)
         target += normalized.pixelY
      }
   }

   const handleRouteChange = () => {
      console.log('stop')
      stop = true
      removeEventListeners()
   }

   useEffect(() => {
      console.log('hello')
      addEventListeners()
      init()
      router.events.on('routeChangeStart', handleRouteChange)
      return () => {
         router.events.off('routeChangeStart', handleRouteChange)
      }
   }, [])

   return (
      <Layout home>
         <Loading />
         <Container>
            <Screen ref={screenRef} id='screen'>
               <List>
                  {allBridgeData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
                  {allBridgeData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
                  {allBridgeData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
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
