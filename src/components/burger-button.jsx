import styled from 'styled-components'
import { Menu, X } from 'react-feather'

const Container = styled.div`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 50px;
   height: 50px;
   background: var(--base-color);
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0 6px 0 0;
   cursor: pointer;
   z-index: 1300;
   @media (min-width: 768px) {
      display: none;
   }
`

const BurgerButton = (props) => {
   return <Container onClick={props.toggleMenu}>{props.menuVisibility ? <Menu size={24} color='#fff' /> : <X size={24} color='#fff' />}</Container>
}

export default BurgerButton
