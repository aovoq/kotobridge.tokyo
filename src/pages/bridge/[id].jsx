import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/layout'
import MiniMap from '../../../public/images/minimap.svg'
import { getAllDataIds, getData } from '../../lib/bridges'
import { ArrowUpRight } from 'react-feather'

const Container = styled.div`
   padding-top: 200px;
`

const HeroWrapper = styled.div`
   position: relative;
   margin-bottom: 113px;
`
const HeroImage = styled.img`
   width: 90%;
   border-top: solid 30px #fff;
   border-right: solid 30px #fff;
`

const Title = styled.h1`
   font-size: 128px;
   font-weight: 900;
   font-family: 'Noto Sans JP', sans-serif;
   color: transparent;
   text-stroke: 1px var(--accent);
   -webkit-text-stroke: 1px var(--accent);
   line-height: 1;
   text-align: right;
`

const SubTitle = styled.h2`
   font-size: 128px;
   font-weight: 800;
   position: absolute;
   top: 66px;
   right: 0;
   text-transform: uppercase;
   color: var(--accent);
   line-height: 96px;
`

const BridgeSVG = styled.img`
   position: absolute;
   left: 10%;
   top: 80px;
   transform: translateX(-50%);
`

const BridgeDetails = styled.div`
   position: absolute;
   left: 0;
   bottom: 60px;
   display: flex;
   flex-direction: column;
   gap: 10px;
`

const BridgeDetail = styled.div`
   display: inline-block;
   align-self: flex-start;
   padding: 0 20px 0 40px;
   font-size: 20px;
   font-weight: 300;
   letter-spacing: 0.1em;
   color: var(--bridge-detail-text);
   background: var(--bridge-detail-bg);
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
`

const Gallery = styled.section`
   display: flex;
   justify-content: center;
   gap: 80px;
   margin-bottom: 185px;
   width: 100%;
   overflow: hidden;
`
const GalleryImg = styled.img`
   width: 600px;
   border: 10px solid #fff;
`

const Intro = styled.section`
   max-width: 1000px;
   margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 100px;
   margin-bottom: 180px;
`

const IntroText = styled.div`
   font-size: 'Noto sans JP';
   color: var(--accent);
   font-size: 18px;
   line-height: 36px;
   letter-spacing: 0.1em;
   p:first-letter {
      font-size: 36px;
   }
`

const IntroImg = styled.img`
   border: 10px solid #fff;
   width: 425px;
`

const History = styled.div`
   margin: auto;
   margin-bottom: 180px;
   max-width: 1000px;
   display: flex;
   flex-direction: column;
   align-items: center;
   .historyTitle {
      font-size: 24px;
      color: var(--accent);
      letter-spacing: 0.6em;
      position: absolute;
      transform: translateX(-0.8em);
      line-height: 52px;
      &Hidden {
         letter-spacing: 2.3em;
         visibility: hidden;
      }
   }
   .ball {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      border: 4px solid var(--accent);
      display: flex;
      justify-content: center;
      align-items: center;
      .innerBall {
         width: 32px;
         height: 32px;
         border-radius: 50%;
         background: var(--accent);
      }
   }
   .historyOuter {
      display: flex;
      justify-content: center;
      .centerLine {
         width: 4px;
         height: 500px;
         background: var(--accent);
      }
      .historyInner {
         width: 500px;
         &.left {
            text-align: right;
            .item {
               &:first-child {
                  margin-top: 70px;
               }
               flex-direction: row-reverse;
               .itemLines {
                  flex-direction: row-reverse;
                  .itemLine {
                     &.Slope {
                        right: -1px;
                        left: auto;
                        transform-origin: 4px 4px;
                        transform: rotate(35deg);
                     }
                     &.Hori {
                        top: 17px;
                        left: auto;
                        right: 7px;
                     }
                  }
               }
            }
         }
         .item {
            &:first-child {
               margin-top: 150px;
            }
            margin-top: 120px;
            position: relative;
            width: 100%;
            height: 30px;
            display: flex;
            gap: 20px;
            .itemLines {
               display: flex;
            }
            .itemLine {
               position: relative;
               background: var(--accent);
               &.Slope {
                  width: 4px;
                  height: 25px;
                  left: -1px;
                  transform-origin: 0px 4px;
                  transform: rotate(-35deg);
               }
               &.Hori {
                  height: 4px;
                  width: 40px;
                  top: 17px;
                  left: 7px;
               }
            }
            .year {
               margin-top: 6px;
               size: 22px;
               font-weight: 600;
               letter-spacing: 0.4em;
               color: var(--accent);
            }
            .text {
               size: 16px;
               font-weight: 300;
               letter-spacing: 0.2em;
               color: var(--accent);
            }
         }
      }
   }
   .arrow {
      width: 30px;
      height: 50px;
      border-top: 25px solid var(--accent);
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
   }
`

const Location = styled.div`
   max-width: 1000px;
   margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 100px;
   margin-bottom: 180px;
`

const MapWrap = styled.div`
   border: 3px solid #7d97b8;
   width: 500px;
   background: #7d97b8;
   position: relative;
   svg {
      /* stroke: #7d97b8; */
      /* stroke-width: 3px; */
      fill: #eef2f4;
   }
`

const Coordinate = styled.p`
   position: absolute;
   font-size: 14px;
   color: #eef2f4;
   bottom: 0;
   right: 2px;
   text-align: right;
   /* font-family: monospace; */
`

const LocationDetail = styled.div``
const LocationTitle = styled.div`
   font-size: 24px;
   color: var(--accent);
   font-weight: 500;
   letter-spacing: 0.4em;
   margin-bottom: 22px;
`

const LocationAddress = styled.ul`
   font-size: 16px;
   font-family: 'Noto sans JP';
   letter-spacing: 0.2em;
   padding-bottom: 36px;
   border-bottom: 1px solid #666;
   margin-bottom: 27px;
   li {
      margin-bottom: 13px;
      &:last-child {
         margin: 0;
      }
   }
`
const LocationAccess = styled.table`
   font-size: 16px;
   font-family: 'Noto sans JP';
   letter-spacing: 0.3em;
   margin-bottom: 88px;
   td {
      padding-bottom: 5px;
   }
   td:nth-of-type(1) {
      width: 135px;
   }
   td:nth-of-type(2) {
      width: 115px;
   }
`

const LocationLink = styled.a`
   color: var(--accent);
   font-size: 18px;
   letter-spacing: 0.2em;
   p {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
   }
`

export const getStaticProps = async ({ params }) => {
   const bridgeData = await getData(params.id)
   return {
      props: {
         bridgeData,
      },
   }
}

export const getStaticPaths = () => {
   const paths = getAllDataIds()
   return {
      paths,
      fallback: false,
   }
}

const Bridge = ({ bridgeData }) => {
   const leftHistory = []
   const rightHistory = []
   const imageBaseUrl = `/images/bridge/${bridgeData.id}/${bridgeData.id}`

   bridgeData.history.map((item, idx) => {
      if (idx % 2 === 0) {
         leftHistory.push(item)
      } else {
         rightHistory.push(item)
      }
   })

   return (
      <Layout>
         <Head>
            <title>{bridgeData.title}</title>
         </Head>
         <Container>
            <HeroWrapper>
               <Title>{bridgeData.title}</Title>
               <SubTitle>{bridgeData.id}</SubTitle>
               <BridgeSVG src={`${imageBaseUrl}.svg`} />
               <HeroImage src={`${imageBaseUrl}-01.jpg`} />
               <BridgeDetails>
                  <BridgeDetail>River : {bridgeData.detail.river}</BridgeDetail>
                  <BridgeDetail>Length : {bridgeData.detail.length}</BridgeDetail>
                  <BridgeDetail>Widge : {bridgeData.detail.widge}</BridgeDetail>
                  <BridgeDetail>Structural format : {bridgeData.detail.structuralFormat}</BridgeDetail>
               </BridgeDetails>
            </HeroWrapper>
            <Gallery>
               <GalleryImg src={`${imageBaseUrl}-02.jpg`} />
               <GalleryImg src={`${imageBaseUrl}-03.jpg`} />
               <GalleryImg src={`${imageBaseUrl}-04.jpg`} />
            </Gallery>
            <Intro>
               <IntroText dangerouslySetInnerHTML={{ __html: bridgeData.jaHtml}} />
               <IntroImg src={`${imageBaseUrl}-05.jpg`} />
            </Intro>
            <History>
               {/* TODO: bridgeData.history.length に応じてheight調整する必要がある */}
               <h2 className='historyTitle'>
                  HIST<span className='historyTitleHidden'>O</span>RY
               </h2>
               <div className='ball'>
                  <div className='innerBall' />
               </div>
               <ul className='historyOuter'>
                  <div className='historyInner left'>
                     {leftHistory.map((item) => (
                        <div className='item' key={item.year}>
                           <div className='itemLines'>
                              <div className='itemLine Slope' />
                              <div className='itemLine Hori' />
                           </div>
                           <li>
                              <p className='year'>{item.year}年</p>
                              <p className='text'>{item.text}</p>
                           </li>
                        </div>
                     ))}
                  </div>
                  <div className='centerLine' />
                  <div className='historyInner right'>
                     {rightHistory.map((item) => (
                        <div className='item' key={item.year}>
                           <div className='itemLines'>
                              <div className='itemLine Slope' />
                              <div className='itemLine Hori' />
                           </div>
                           <li>
                              <p className='year'>{item.year}年</p>
                              <p className='text'>{item.text}</p>
                           </li>
                        </div>
                     ))}
                  </div>
               </ul>
               <div className='arrow' />
            </History>
            <Location>
               <MapWrap>
                  <MiniMap />
                  <Coordinate>
                     {bridgeData.location.coordinate.n}
                     <br />
                     {bridgeData.location.coordinate.e}
                  </Coordinate>
               </MapWrap>
               <LocationDetail>
                  <LocationTitle>LOCATION</LocationTitle>
                  <LocationAddress>
                     {bridgeData.location.address.map((text, idx) => (
                        <li key={idx}>{text}</li>
                     ))}
                  </LocationAddress>
                  <LocationAccess>
                     <tbody>
                        {bridgeData.location.access.map((row, idx) => (
                           <tr key={idx}>
                              <td>{row.departure}</td>
                              <td>{row.time}</td>
                              <td>{row.distance}</td>
                           </tr>
                        ))}
                     </tbody>
                  </LocationAccess>
                  <LocationLink>
                     <p>
                     <ArrowUpRight />Google MAP
                     </p>
                  </LocationLink>
               </LocationDetail>
            </Location>
         </Container>
      </Layout>
   )
}

export default Bridge
