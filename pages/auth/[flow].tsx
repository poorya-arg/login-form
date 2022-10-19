import Link from 'next/link'
import Layout from '../../components/Layout'
import AuthPageComponent from '../../components/ui/AuthPageComponent'
import CardComponent from '../../components/widgets/CardComponent'

const AboutPage = () => (
  <Layout >
    <CardComponent >
      <AuthPageComponent />
    </CardComponent>
  </Layout>
)

export default AboutPage
