import Link from 'next/link'
import styled from 'styled-components'

const BridgeImg = styled.div`
   background: url('/images/bridge/kiyosu-bridge/kiyosu-bridge-01.jpg');
   background-size: cover;
   background-position: center;
   width: calc(30vh / 9 * 16);
   height: 30vh;
   @media (max-height: 840px) {
      width: calc(25vh / 9 * 16);
      height: 25vh;
   }
`
const OuterText = styled.div`
   color: #152e71;
   font-weight: 900;
   font-size: 36px;
   line-height: 1;
   text-align: right;
   text-transform: uppercase;
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
   font-size: min(8vh, 80px);
   font-family: 'Noto sans JP';
   font-weight: 800;
   color: rgba(238, 242, 244, 0.6);
   -webkit-text-stroke: 1px #152E71;
`

const IndexItem = () => {
   return (
      <>
         <Link href='/bridge/kiyosu-bridge'>
            <a>
               <ImgWrap>
                  <BridgeImg />
                  <InnerText>清洲橋</InnerText>
               </ImgWrap>
               <OuterText>KIYOSU-BRIDGE</OuterText>
            </a>
         </Link>
      </>
   )
}


export default IndexItem
