import Layout from '../components/layout'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import normalizeWheel from 'normalize-wheel'
import { useRouter } from 'next/router'
import IndexItem from '../components/index-item'
import { getSortedData } from '../lib/bridges'

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
   height: 100%;
   white-space: nowrap;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 64px;
`

const Upper = styled.div`
   position: relative;
   display: flex;
   gap: 240px;
   margin-left: 75px;
`

const Lower = styled.div`
   position: relative;
   display: flex;
   gap: 240px;
   margin-left: 458px;
   margin-right: 75px;
`

const Home = ({ allBridgeData }) => {
   const router = useRouter()
   const screenRef = useRef(null)
   let images
   let imageWidth
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
   console.log(upperData, lowerData)

   const _lerp = (start, end, t) => {
      return start * (1 - t) + end * t
   }

   const _clamp = (min, max, value) => {
      return value < min ? min : value > max ? max : value
   }

   const addEventListeners = () => {
      window.addEventListener('wheel', onScroll)
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
      console.log('revemoEventListener')
      window.removeEventListener('wheel', onScroll)
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
      if (screenRef) {
         screenRef.current.style = `transform: translate3d(-${current}px, 0, 0)`
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
      console.log('onScroll')
      const normalized = normalizeWheel(event)
      target += normalized.pixelY
   }

   const pageChangeHandler = () => {
      console.log('stop')
      stop = true
      removeEventListeners()
   }

   useEffect(() => {
      console.log('hello')
      addEventListeners()
      init()
      router.events.on('routeChangeStart', pageChangeHandler)
      return () => {
         router.events.off('routeChangeStart', pageChangeHandler)
      }
   }, [])

   return (
      <Layout home>
         <Container>
            <Screen ref={screenRef}>
               <Upper>
                  {upperData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
               </Upper>
               <Lower>
                  {lowerData.map((data, idx) => (
                     <IndexItem key={idx} data={data} />
                  ))}
               </Lower>
            </Screen>
         </Container>
      </Layout>
   )
}

export const getStaticProps = async () => {
   const allBridgeData = getSortedData()
   return {
      props: {
         allBridgeData
      }
   }
}

export default Home
