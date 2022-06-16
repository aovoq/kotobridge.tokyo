import styled from 'styled-components'

const Container = styled.div`
   width: 100px;
   height: 100px;
   position: absolute;
   top: -2px;
   left: -2px;
   span {
      position: absolute;
      top: 0;
      left: calc(50% - 5px);
      height: 50%;
      width: 10px;
      display: inline-block;
      transform-origin: center bottom;
      font-size: 14px;
   }
   animation: catchAnime 2s 0.5s ease both;
   @keyframes catchAnime {
      0% {
         transform: translate(-25px, -25px) rotate(-30deg);
         opacity: 0;
      }
      25% {
         transform: translate(-25px, -25px) rotate(0deg);
         opacity: 1;
      }
      75% {
         transform: translate(-25px, -25px) rotate(0deg);
         opacity: 1;
      }
      100% {
         transform: translate(-25px, -25px) rotate(30deg);
         opacity: 0;
      }
   }
`

const Catch = ({home}) => {
   return (
      <Container style={{animationDelay: home && '2s'}}>
         {'PUSH!'.split('').map((c, idx) => (
            <span style={{ transform: `rotate(${280 + 16 * idx}deg)` }} key={idx}>
               {c}
            </span>
         ))}
      </Container>
   )
}

export default Catch
