import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { getRecipesData, getRecipesByCategory } from '../lib/recipe'
import { getCategoriesData } from '../lib/category';
import { Category, ImageSearch } from '@material-ui/icons'

export async function getStaticProps() {
  const allRecipesData = getRecipesData()
  const allCategoriesData = getCategoriesData();
  const recipesByCategory = allCategoriesData.map((category) => {
      return getRecipesByCategory(category.id);
  });
  return {
    props: {
      allRecipesData,
      allCategoriesData,
      recipesByCategory
    }
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: '#fff',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Home({ allRecipesData, allCategoriesData, recipesByCategory }) {
  const classes = useStyles();
  return (
    <Layout>
      <h1>Cookbook!</h1>
      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
      <section className={classes.root}>
        <ul>
          {allCategoriesData.length}
          {allCategoriesData.map((cat, idx) => ( 
            <li key={cat.id}>
              <ul>
               
              </ul>
            </li>
          ))}
        </ul>
        <GridList cellHeight={300} cols={3} className={classes.gridList}>
          {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Dinner</ListSubheader>
          </GridListTile> */}
          {allRecipesData.map((recipe, idx) => (
            <GridListTile key={idx} cols={1}>
                {getImage(recipe)}
                <GridListTileBar
                  title={<Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  subtitle=""
                  actionIcon={
                    <IconButton aria-label={`info about ${recipe.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
            </GridListTile>
          ))}
        </GridList>
        {/* <h1>Recipes: {allRecipesData.length}</h1>
          <ul>
            {allRecipesData.map((recipe, idx) => (
              <li key={idx}>
                {getImage(recipe.images)}
                <Link href={`/recipes/${recipe.slug}`}>
                  {recipe.title}
                </Link>
                <br />
              </li>
            ))}
          </ul> */}
      </section>
    </Layout>
  )
}

function getImage(r) {
  if (r.images) {
    return <img src={"/img/" + r.images[0]} alt={r.title} />
  }
  return "";
}
