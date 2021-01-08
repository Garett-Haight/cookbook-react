import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Recipe({recipeData}) {
  return (
    <Layout>
        <Head>
            <title>Recipe Page</title>
        </Head>
        <h1>{recipeData.title}</h1>
        <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
        </h2>
    </Layout>
  )
}