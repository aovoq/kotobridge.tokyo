import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllDataIds, getData } from '../../lib/bridges'

export const getStaticProps = async({ params }) => {
   const bridgeData = getData(params.id)
   return {
      props: {
         bridgeData
      }
   }
}

export const getStaticPaths = () => {
   const paths = getAllDataIds()
   return {
      paths,
      fallback: false
   }

}

const bridgeName = 'KiyosuBashi'

const Bridge = ({ bridgeData }) => {
   return (
      <Layout>
         <Head>
            <title>{bridgeData.title}</title>
         </Head>
         <h1>hello {bridgeData.title}</h1>
         <h1>hello {bridgeData.id}</h1>
      </Layout>
   )
}

export default Bridge
