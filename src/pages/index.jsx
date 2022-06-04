import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 1000px;
   height: 100%;
   margin: 0 auto;
`

const Home = () => {
   return (
      <Layout home>
         <Container>
            <div className='image'></div>
         </Container>
      </Layout>
   )
}

export default Home
