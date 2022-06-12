import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
   height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const Title = styled.h1`
   font-size: 48px;
`

const Custom404 = () => {
   return (
      <Layout>
         <Container>
            <Title>404</Title>
            <p>Please back</p>
         </Container>
      </Layout>
   )
}

export default Custom404
