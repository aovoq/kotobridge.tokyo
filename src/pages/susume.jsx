import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
   padding-top: 200px;
   width: 100%;
   @media (max-width: 768px) {
      padding-top: 120px;
   }
`

const HalfImageSection = styled.section`
   width: 100%;
   display: flex;
   &:nth-child(even) {
      flex-direction: row-reverse;
   }
   &:last-child {
      margin-bottom: 100px;
   }
   @media (max-width: 768px) {
      flex-direction: column-reverse;
      &:nth-child(even) {
         flex-direction: column-reverse;
      }
   }
`
const TextBox = styled.div`
   width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 768px) {
      width: 100%;
      display: block;
      text-align: center;
   }
`
const TextBoxInner = styled.div`
   width: 60%;
   h1 {
      font-size: 24px;
      margin-bottom: 40px;
      letter-spacing: 0.2em;
   }
   p {
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.15em;
   }
   @media (max-width: 768px) {
      padding: 20px;
      width: 100%;
      aspect-ratio: 1 / 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`

const ImgBox = styled.div`
   width: 50%;
   img {
      width: 100%;
   }
   @media (max-width: 768px) {
      width: 100%;
   }
`

const Susume = () => {
   return (
      <Layout>
         <Container>
            <HalfImageSection>
               <TextBox>
                  <TextBoxInner>
                     <h1>橋巡りのすゝめ</h1>
                     <p>あなたも橋巡りをしてみませんか？</p>
                  </TextBoxInner>
               </TextBox>
               <ImgBox>
                  <img src='/images/susume-01.jpg' alt='' />
               </ImgBox>
            </HalfImageSection>
            <HalfImageSection>
               <TextBox>
                  <TextBoxInner>
                     <h1>橋が魅せてくれる物</h1>
                     <p>
                        橋というのは生活に欠かせない物です。 <br />
                        そんな橋の機能的な美しさと、建築的な美しさに目を向けてみて欲しいです。 <br />
                        また、昼と夜で違った顔を見せてくれるでしょう。
                        <br />
                        ライトアップされる橋はまた違う美しさや、暗い中の無骨な橋の悠然とした様も良いですよ。
                     </p>
                  </TextBoxInner>
               </TextBox>
               <ImgBox>
                  <img src='/images/susume-02.jpg' alt='' />
               </ImgBox>
            </HalfImageSection>
            <HalfImageSection>
               <TextBox>
                  <TextBoxInner>
                     <h1>色々な移動手段</h1>
                     <p>
                        ドライブで橋を巡っても良いですし、 <br />
                        巡らずとも近くに来た時に徒歩で寄ってみるのもいいでしょう。 <br />
                        個人的には自転車がオススメです。
                        <br />
                        川辺の風を感じながら、小回り良く色々な橋を見ることが出来ます。 <br />
                        江東区は至る所にレンタサイクルのポータルが設置されています。ぜひ利用してみてください。
                     </p>
                  </TextBoxInner>
               </TextBox>
               <ImgBox>
                  <img src='/images/susume-03.jpg' alt='' />
               </ImgBox>
            </HalfImageSection>
            <HalfImageSection>
               <TextBox>
                  <TextBoxInner>
                     <h1>水上バスでのクルージング</h1>
                     <p>
                        隅田川には、水上バスでのクルージングが存在します。 <br />
                        リーズナブルな料金で長時間楽しむことができ、
                        <br />
                        様々な運行ルートと乗り場があるため移動を兼ねる事も可能です。
                        <br />
                        運行時間を確認して行くといいでしょう。
                     </p>
                  </TextBoxInner>
               </TextBox>
               <ImgBox>
                  <img src='/images/susume-04.jpg' alt='' />
               </ImgBox>
            </HalfImageSection>
         </Container>
      </Layout>
   )
}

export default Susume
