import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
   padding-top: 100px;
   width: 100%;
   max-width: 960px;
   margin: auto;
`

const PageHead = styled.section`
   position: relative;
   margin-top: 100px;
   margin-bottom: 200px;
`
const HeadImg = styled.div`
   background-image: url('/images/kiyosu-bridge-03.jpg');
   background-size: cover;
   background-position: center;
   width: 80%;
   height: 500px;
   backdrop-filter: sepia;
`
const HeadTitle = styled.h1`
   position: absolute;
   top: 20%;
   left: 50%;
   width: 50%;
   padding-left: 0.4em;
   padding-bottom: 0.1em;
   font-family: 'Noto sans JP', sans-serif;
   font-size: 32px;
   letter-spacing: 0.4em;
   color: #fff;
   background: #7d97b8;
`
const HeadSubTitle = styled.p`
   position: absolute;
   top: 32%;
   left: 55%;
   width: 50%;
   padding-left: 0.4em;
   padding-bottom: 0.1em;
   font-family: 'Noto sans JP', sans-serif;
   font-size: 16px;
   letter-spacing: 0.4em;
   color: #fff;
   background: #7d97b8;
`

const PageSection = styled.section`
   position: relative;
   margin-bottom: 200px;
`
const SectionImg = styled.div`
   background-image: url('/images/bridge-charm.jpg');
   background-size: cover;
   background-position: center;
   width: 70%;
   height: 500px;
   position: absolute;
`
const SectionTextWrap = styled.div`
   width: 50%;
`
const SectionTitle = styled.h2`
   font-size: 32px;
   color: #152e71;
`
const SectionText = styled.p`
   color: #152e71;
   font-size: 18px;
`

const Susume = () => {
   return (
      <Layout>
         <Container>
            <PageHead>
               <HeadImg />
               <HeadTitle>橋巡りのすゝめ</HeadTitle>
               <HeadSubTitle>あなたも橋巡りをしてみませんか？</HeadSubTitle>
            </PageHead>
            <PageSection>
               <SectionImg />
               <SectionTextWrap>
                  <SectionTitle>橋が魅せてくれる物</SectionTitle>
                  <SectionText>
                     橋というのは生活に欠かせない物です。 そんな橋の機能的な美しさと、建築的な美しさに目を向けてみて欲しいです。 また、昼と夜で違った顔を見せてくれるでしょう。
                     ライトアップされる橋はまた違う美しさや、暗い中の無骨な橋の悠然とした様も良いですよ。
                  </SectionText>
               </SectionTextWrap>
            </PageSection>
         </Container>
      </Layout>
   )
}

export default Susume
