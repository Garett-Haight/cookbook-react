import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { getSortedRecipesData } from '../lib/recipe'

export async function getStaticProps() {
  const allRecipesData = getSortedRecipesData()
  return {
    props: {
      allRecipesData
    }
  }
}

export default function Home({ allRecipesData }) {
  return (
    <Layout>
      <Head>
        <title>Cookbook!</title>
      </Head>
      <h1>Cookbook!</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <section>
        <h1>Recipes: {allRecipesData.length}</h1>
          <ul>
            {allRecipesData.map((recipe, idx) => (
              <li key={idx}>
                <Link href={`recipes/${recipe.slug}`}>
                  {recipe.title}
                </Link>
                <br />
              </li>
            ))}
          </ul>
      </section>

      <footer className={styles.footer}>

      </footer>
    </Layout>
  )
}
