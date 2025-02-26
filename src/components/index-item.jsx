import Link from "next/link";
import styled from "styled-components";
import { ThemeContext } from "../lib/theme-provider";
import { useContext } from "react";

const Container = styled.div`
   position: relative;
   &:nth-child(odd) {
      transform: translate3d(0, -5vh, 0);
      transition: 0.3s ease;
   }
   &:nth-child(even) {
      transform: translate3d(0, 10vh, 0);
      transition: 0.3s ease;
   }
   @media (min-width: 768px) {
      &:nth-child(odd):hover {
         transform: translate3d(0, -5.5vh, 0);
      }
      &:nth-child(even):hover {
         transform: translate3d(0, 9.5vh, 0);
      }
   }
   @media (max-width: 768px) {
      &:nth-child(odd) {
         transform: translate3d(0, 0, 0);
         align-self: flex-end;
      }
      &:nth-child(even) {
         transform: translate3d(0, 0, 0);
      }
      width: 85%;
   }
   ::-webkit-full-page-media, :future, :root, & {
      width: calc(20vh / 9 * 16);
      height: 20vh;
   }
`;

const BridgeImg = styled.div`
   /* background: url('/images/bridge/kiyosu-bridge/kiyosu-bridge-01.jpg'); */
   background-size: cover;
   background-position: center;
   height: 100%;
   box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
   aspect-ratio: 16 / 9;
   @-moz-document url-prefix() {
      width: calc(20vh / 9 * 16);
   }
   @media (max-width: 768px) {
      aspect-ratio: 3 / 1;
      width: 100%;
      background-position: center 70%;
   }
   display: var(--day);
`;
const NightBridgeImg = styled(BridgeImg)`
   display: var(--night);
`;

const OuterText = styled.div`
   position: absolute;
   right: 0;
   bottom: -1em;
   color: var(--accent);
   font-weight: 900;
   font-size: min(3vh, 24px);
   line-height: 1;
   text-align: right;
   text-transform: uppercase;
`;

const ImgWrap = styled.div`
   position: relative;
   line-height: 1.06;
   height: 100%;
`;

const InnerText = styled.div`
   position: absolute;
   bottom: 0;
   top: -1.1em;
   font-size: min(8vh, 60px);
   font-family: "Noto sans JP";
   font-weight: 800;
   color: var(--index-text-fill);
   color: transparent;
   color: var(--bg);
   opacity: 0.6;
   -webkit-text-stroke: 2px var(--accent);
   text-stroke: 2px var(--accent);
   paint-order: stroke fill;
   @media (max-width: 768px) {
      display: none;
   }
`;

const IndexItem = (props) => {
   const { theme } = useContext(ThemeContext);
   return (
      <Container>
         <Link href={`/bridge/${props.data.id}`}>
            <a>
               <ImgWrap>
                  <BridgeImg
                     style={{
                        backgroundImage: `url('/images/bridge/${props.data.id}/${props.data.id}-01.jpg')`,
                     }}
                  />
                  <NightBridgeImg
                     style={{
                        backgroundImage: `url('/images/bridge/${props.data.id}/${props.data.id}-night-01.jpg')`,
                     }}
                  />
                  <InnerText>{props.data.title}</InnerText>
               </ImgWrap>
               <OuterText>{props.data.id}</OuterText>
            </a>
         </Link>
      </Container>
   );
};

export default IndexItem;
