import fs from 'fs'
import { totalmem } from 'os';
import path from 'path'

const recipesDirectory = path.join(process.cwd(), 'recipes')

export function getSortedRecipesData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(recipesDirectory);
    const allRecipesData = fileNames.map(fileName => {
    
    // Read JSON file as string
    const fullPath = path.join(recipesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse JSON string
    const json = JSON.parse(fileContents);
    // create url slugs
    
    return json;
  })
  return allRecipesData[0].map((r) => {
     let slug = slugify(r.title);
        return {
            slug,
            ...r
        }
  });
}

export function getAllRecipeIds() {
    let json = getSortedRecipesData();
    return json.map((r) => {
        let slug = r.slug;
        return {
            params: {
                title: slug
            }
        };
    });
}

function slugify(str) {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export function getRecipeData(title) {
    const recipeJson = getSortedRecipesData();
    const recipe = recipeJson.find((r) => {
        let slug = r.slug;
        return slug == title;
    });
    return {
      ...recipe
    }
  }