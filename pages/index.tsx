import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout'

const IndexPage = () => {
  const router = useRouter();


  React.useEffect(() => {
    router.push("/panel")
  }, [])

  
  return (
  <Layout >

  </Layout>
)}

export default IndexPage
