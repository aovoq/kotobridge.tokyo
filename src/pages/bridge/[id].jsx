import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/layout'
import MiniMap from '../../../public/images/minimap.svg'
import { getAllDataIds, getData } from '../../lib/bridges'
import { ArrowUpRight } from 'react-feather'
import History from '../../components/history'

const Container = styled.div`
   padding-top: 200px;
   @media (max-width: 768px) {
      padding-top: 120px;
   }
`

const HeroWrapper = styled.div`
   position: relative;
   margin-bottom: 113px;
   @media (max-width: 768px) {
      margin-bottom: 30px;
   }
`
const HeroImage = styled.img`
   display: var(--day);
   width: 90%;
   border-top: solid 30px;
   border-right: solid 30px;
   border-color: #fff;
   @media (max-width: 768px) {
      display: none;
   }
`

const Title = styled.h1`
   font-size: 128px;
   font-weight: 900;
   font-family: 'Noto Sans JP', sans-serif;
   color: transparent;
   -webkit-text-stroke: 1px var(--accent);
   text-stroke: 1px var(--accent);
   line-height: 1;
   text-align: right;
   @media (max-width: 768px) {
      font-size: 64px;
   }
`

const SubTitle = styled.h2`
   font-size: min(8vw, 128px);
   font-weight: 800;
   position: absolute;
   bottom: calc((90vw - 30px) / 16 * 9);
   line-height: 0.67;
   right: 0;
   text-transform: uppercase;
   color: var(--accent);
   @media (max-width: 768px) {
      bottom: calc((95vw - 15px) / 9 * 16);
      font-size: 48px;
   }
`

const BridgeSVG = styled.img`
   position: absolute;
   width: min(16vw, 190px);
   left: 9%;
   bottom: calc((90vw - 30px) / 16 * 9 + 10px);
   transform: translateX(-50%);
   @media (max-widtkh: 768px) {
      width: 90px;
      top: 100px;
      opacity: 0.4;
   }
`

const BridgeDetails = styled.div`
   position: absolute;
   left: 0;
   bottom: 60px;
   display: flex;
   flex-direction: column;
   gap: 10px;
   @media (max-width: 768px) {
      bottom: 20px;
   }
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
   @media (max-width: 768px) {
      font-size: 12px;
      padding: 0 10px 0 20px;
   }
`

const Gallery = styled.section`
   display: flex;
   justify-content: center;
   gap: 80px;
   margin-bottom: 185px;
   width: 100%;
   overflow: hidden;
   @media (max-width: 768px) {
      gap: 25px;
      margin-bottom: 85px;
   }
`
const GalleryImg = styled.img`
   width: 600px;
   border: 10px solid #fff;
   display: var(--day);
   @media (max-width: 768px) {
      width: 40%;
      border-width: 5px;
   }
`

const Intro = styled.section`
   max-width: 1000px;
   margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 100px;
   margin-bottom: 180px;
   @media (max-width: 768px) {
      margin-bottom: 80px;
      flex-direction: column;
      gap: 80px;
   }
`

const IntroText = styled.div`
   font-size: 'Noto sans JP';
   color: var(--accent);
   font-size: 18px;
   line-height: 36px;
   letter-spacing: 0.1em;
   position: relative;
   p:first-letter {
      font-size: 36px;
   }
   @media (max-width: 768px) {
      width: 90%;
      font-size: 16px;
      p:first-letter {
         font-size: 26px;
      }
   }
`

const IntroLine = styled.div`
   width: 6px;
   height: 6px;
   border-radius: 50%;
   background: var(--accent);
   margin: auto;
   position: relative;
   &::before {
      content: '';
      width: 100px;
      height: 2px;
      background: var(--accent);
      position: absolute;
      border-radius: 2px;
      left: -110px;
      top: 2px;
   }
   &::after {
      content: '';
      width: 100px;
      height: 2px;
      background: var(--accent);
      position: absolute;
      border-radius: 2px;
      right: -110px;
      top: 2px;
   }
   @media (min-width: 768px) {
      display: none;
   }
`

const IntroImg = styled.img`
   border: 10px solid #fff;
   width: 425px;
   display: var(--day);
   @media (max-width: 768px) {
      display: none;
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
   @media (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      max-width: 90%;
   }
`

const MapWrap = styled.div`
   border: 3px solid #7d97b8;
   width: 500px;
   background: #7d97b8;
   position: relative;
   svg {
      /* stroke: #7d97b8; */
      /* stroke-width: 3px; */
      fill: var(--bg);
   }
   @media (max-width: 768px) {
      width: 100%;
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

const LocationDetail = styled.div`
   @media (max-width: 768px) {
      width: 100%;
   }
`
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

const NightHeroImage = styled(HeroImage)`
   display: var(--night);
   border-color: var(--gray);
`
const NightGalleryImg = styled(GalleryImg)`
   display: var(--night);
   border: 10px solid var(--gray);
`
const NightIntroImg = styled(IntroImg)`
   display: var(--night);
   border: 10px solid var(--gray);
`

const MobileHeroImage = styled(HeroImage)`
   border-width: 15px;
   width: 95%;
   display: none;
   @media (max-width: 768px) {
      display: var(--day);
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
   const imageBaseUrl = `/images/bridge/${bridgeData.id}/${bridgeData.id}`

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
               <NightHeroImage src={`${imageBaseUrl}-night-01.jpg`} />
               <MobileHeroImage src={`${imageBaseUrl}-05.jpg`} />
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
               <NightGalleryImg src={`${imageBaseUrl}-night-02.jpg`} />
               <NightGalleryImg src={`${imageBaseUrl}-night-03.jpg`} />
               <NightGalleryImg src={`${imageBaseUrl}-night-04.jpg`} />
            </Gallery>
            <Intro>
               <IntroLine />
               <IntroText dangerouslySetInnerHTML={{ __html: bridgeData.jaHtml }} />
               <IntroLine />
               <IntroImg src={`${imageBaseUrl}-05.jpg`} />
               <NightIntroImg src={`${imageBaseUrl}-night-05.jpg`} />
            </Intro>
            <History data={bridgeData.history} />
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
                        <ArrowUpRight />
                        Google MAP
                     </p>
                  </LocationLink>
               </LocationDetail>
            </Location>
         </Container>
      </Layout>
   )
}

export default Bridge
