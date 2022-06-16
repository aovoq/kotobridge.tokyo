import styled from 'styled-components'

const Container = styled.div`
   margin: auto;
   max-width: 1000px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 180px;
   @media (max-width: 768px) {
      margin-bottom: 80px;
   }
`

const HeadText = styled.h2`
   position: absolute;
   color: var(--accent);
   font-size: 24px;
   line-height: 52px;
   letter-spacing: 0.6em;
   transform: translate3d(-0.8em, 0, 0);
   span {
      visibility: hidden;
      letter-spacing: 2.3em;
   }
`

const HeadBall = styled.div`
   width: 52px;
   height: 52px;
   border-radius: 50%;
   border: 4px solid var(--accent);
   display: flex;
   justify-content: center;
   align-items: center;
`
const HeadInnerBall = styled.div`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   background: var(--accent);
`

const Timeline = styled.ul`
   width: 100%;
   display: flex;
   justify-content: center;
`

const CenterStroke = styled.div`
   width: 4px;
   height: 500px;
   background: var(--accent);
`

const ItemList = styled.div`
   flex: 1 1;
`

// Item Style

const Item = styled.div`
   width: 100%;
   margin-top: 120px;
   display: flex;
   &:first-child {
        margin-top: 135px;
   }
`
const ItemStroke = styled.div`
   display: flex;
`
const ItemStrokeSlope = styled.div`
   position: relative;
   background: var(--accent);
   width: 4px;
   height: 25px;
   left: -1px;
   transform-origin: 0 4px;
   transform: rotate(-35deg);
`
const ItemStrokeHori = styled.div`
   position: relative;
   background: var(--accent);
   width: 40px;
   height: 4px;
   top: 17px;
   left: 7px;
`
const ItemText = styled.li`
   padding-left: 20px;
`
const ItemTextYear = styled.p`
   line-height: 35px;
   size: 22px;
   letter-spacing: 0.4em;
   color: var(--accent);
`
const ItemTextContent = styled.p`
   size: 16px;
   letter-spacing: 0.2em;
   color: var(--accent);
`

// LeftItem Style Diff

const LeftItem = styled(Item)`
   text-align: right;
   flex-direction: row-reverse;
   &:first-child {
      margin-top: 60px;
   }
`
const LeftItemStroke = styled(ItemStroke)`
   flex-direction: row-reverse;
`
const LeftItemStrokeSlope = styled(ItemStrokeSlope)`
   left: auto;
   right: -1px;
   transform-origin: 4px 4px;
   transform: rotate(35deg);
`
const LeftItemStrokeHori = styled(ItemStrokeHori)`
   left: auto;
   right: 7px;
`
const LeftItemText = styled(ItemText)`
   padding-left: 0;
   padding-right: 20px;
`
const LeftItemTextYear = styled(ItemTextYear)`
   margin-right: -0.4em;
`
const LeftItemTextContent = styled(ItemTextContent)`
   margin-right: -0.2em;
`

const Arrow = styled.div`
   width: 30px;
   height: 50px;
   border-top: 25px solid var(--accent);
   border-right: 15px solid transparent;
   border-left: 15px solid transparent;
`

const History = (props) => {
   const leftHistory = []
   const rightHistory = []

   props.data.map((item, idx) => {
      if (idx % 2 === 0) {
         leftHistory.push(item)
      } else {
         rightHistory.push(item)
      }
   })

   return (
      <Container>
         <HeadText>
            HIST<span>O</span>RY
         </HeadText>
         <HeadBall>
            <HeadInnerBall />
         </HeadBall>
         <Timeline>
            <ItemList>
               {leftHistory.map((item, _idx) => (
                  <LeftItem className='left' key={_idx}>
                     <LeftItemStroke>
                        <LeftItemStrokeSlope />
                        <LeftItemStrokeHori />
                     </LeftItemStroke>
                     <LeftItemText>
                        <LeftItemTextYear>{item.year}年</LeftItemTextYear>
                        <LeftItemTextContent>{item.text}</LeftItemTextContent>
                     </LeftItemText>
                  </LeftItem>
               ))}
            </ItemList>
            <CenterStroke style={{ height: `calc(${props.data.length} * 100px + 100px)` }} />
            <ItemList>
               {rightHistory.map((item, _idx) => (
                  <Item className='right' key={_idx}>
                     <ItemStroke>
                        <ItemStrokeSlope />
                        <ItemStrokeHori />
                     </ItemStroke>
                     <ItemText>
                        <ItemTextYear>{item.year}年</ItemTextYear>
                        <ItemTextContent>{item.text}</ItemTextContent>
                     </ItemText>
                  </Item>
               ))}
            </ItemList>
         </Timeline>
         <Arrow />
      </Container>
   )
}

export default History
