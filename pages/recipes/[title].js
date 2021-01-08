import Layout from '../../components/layout'
import { getAllRecipeIds, getRecipeData } from '../../lib/recipe'

export default function Recipe({recipeData}) {
  return (
  <Layout>
      <h1>{recipeData.title}</h1>
      <h2>Ingredients</h2>
      <ul>
      {recipeData.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {ingredient.qty} {ingredient.unit}. {ingredient.name}
                <br />
              </li>
            ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
      {recipeData.instructions.map((instruction, idx) => (
              <li key={idx}>
                {instruction.text}
                <br />
              </li>
            ))}
      </ol>
  </Layout>
  );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllRecipeIds();
    return {
        paths, 
        fallback: false
    };
}
  
export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const recipeData = getRecipeData(params.title);
    return {
        props: {
            recipeData
        }
    }
}