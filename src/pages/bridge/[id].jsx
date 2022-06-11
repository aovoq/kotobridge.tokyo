import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/layout'
import MiniMap from '../../../public/images/minimap.svg'
import { getAllDataIds, getData } from '../../lib/bridges'
import { ArrowUpRight } from 'react-feather'

const Container = styled.div`
   padding-top: 100px;
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
   text-stroke: 1px #152e71;
   -webkit-text-stroke: 1px #152e71;
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
   color: #152e71;
   line-height: 96px;
`

const BridgeSVG = styled.img`
   position: absolute;
   left: 50%;
   top: 80px;
   transform: translateX(-250%);
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
   color: #fff;
   background: #152e71;
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

const IntroText = styled.p`
   font-size: 'Noto sans JP';
   color: #152e71;
   font-size: 18px;
   line-height: 36px;
   letter-spacing: 0.1em;
   &::first-letter {
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
      color: #152e71;
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
      border: 4px solid #152e71;
      display: flex;
      justify-content: center;
      align-items: center;
      .innerBall {
         width: 32px;
         height: 32px;
         border-radius: 50%;
         background: #152e71;
      }
   }
   .historyOuter {
      display: flex;
      justify-content: center;
      .centerLine {
         width: 4px;
         height: 500px;
         background: #152e71;
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
               background: #152e71;
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
               color: #152e71;
            }
            .text {
               size: 16px;
               font-weight: 300;
               letter-spacing: 0.2em;
               color: #152e71;
            }
         }
      }
   }
   .arrow {
      width: 30px;
      height: 50px;
      border-top: 25px solid #152e71;
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
   color: #152e71;
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
   color: #152e71;
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

const history = [
   {
      year: '1925',
      text: '着工',
   },
   {
      year: '1928',
      text: '竣工',
   },
   {
      year: '2000',
      text: '第一回土木学会選奨土木遺産に選定',
   },
   {
      year: '2007',
      text: '国の重要文化財（建造物）に指定',
   },
   {
      year: '2020',
      text: 'ライトアップ工事完了、点灯開始',
   },
]

const Bridge = ({ bridgeData }) => {
   console.log(bridgeData)
   const leftHistory = []
   const rightHistory = []

   history.map((item, idx) => {
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
               <BridgeSVG src='/images/kiyosu-bridge.svg' />
               <HeroImage src='/images/kiyosu-bridge.jpg' />
               <BridgeDetails>
                  <BridgeDetail>River : Sumida River</BridgeDetail>
                  <BridgeDetail>Length : 186.3m</BridgeDetail>
                  <BridgeDetail>Widge : 22.0m</BridgeDetail>
                  <BridgeDetail>Structural format : Self-anchored suspension bridge</BridgeDetail>
               </BridgeDetails>
            </HeroWrapper>
            <Gallery>
               <GalleryImg src='/images/kiyosu-bridge-02.jpg' />
               <GalleryImg src='/images/kiyosu-bridge-03.jpg' />
               <GalleryImg src='/images/kiyosu-bridge-04.jpg' />
            </Gallery>
            <Intro>
               <IntroText>
                  清洲橋は、永代橋とともに震災復興事業として「中洲の渡し」と呼ばれる渡し場に架橋されました。西詰の日本橋区中洲町、東詰の深川区清住町の1字ずつを取り「清洲橋」という名になった。繊細な女性的なデザインとし、当時世界で最も美しいとされていたドイツ、ケルン市にあったヒンデンブルク橋がモデルとされ、自碇式吊橋が採用された。
               </IntroText>
               <IntroImg src='/images/kiyosu-bridge-05.jpg' />
            </Intro>
            <History>
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
                     35°40'56.5"N
                     <br />
                     139°47'31.2"E
                  </Coordinate>
               </MapWrap>
               <LocationDetail>
                  <LocationTitle>LOCATION</LocationTitle>
                  <LocationAddress>
                     <li>東京都道474号浜町北砂町線（清洲橋通り）</li>
                     <li>東京都江東区清澄-丁目-中央区日本橋中洲</li>
                  </LocationAddress>
                  <LocationAccess>
                     <tbody>
                        <tr>
                           <td>清澄白河駅</td>
                           <td>徒歩八分</td>
                           <td>600m</td>
                        </tr>
                        <tr>
                           <td>水天宮前</td>
                           <td>徒歩九分</td>
                           <td>750m</td>
                        </tr>
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
