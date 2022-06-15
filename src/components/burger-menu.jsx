import styled from 'styled-components'

const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 1200;
   background: rgba(255, 255, 255, 0.8);
   display: block;
   transition: 0.3s;
`

const BurgerMenu = (props) => {
   return <Container style={{display: props.menuVisibility ? 'none' : '' }}></Container>
}

export default BurgerMenu
