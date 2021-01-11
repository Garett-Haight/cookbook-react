import fs from 'fs'
import path from 'path'

const categoriesDirectory = path.join(process.cwd(), 'categories')

export function getCategoriesData() {
    const fileNames = fs.readdirSync(categoriesDirectory);
    const allCategoriesData = fileNames.map(fileName => {
    
    // Read JSON file as string
    const fullPath = path.join(categoriesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse JSON string
    const json = JSON.parse(fileContents);
    // create url slugs
    
    return json;
  })
  return allCategoriesData[0].map((c) => {
     let slug = slugify(c.title);
        return {
            slug,
            ...c
        }
  });
}

export function getAllCategorySlugs() {
    let json = getCategoriesData();
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

export function getCategoryData(title) {
    const categoryJson = getCategoriesData();
    const category = categoryJson.find((c) => {
        let slug = c.slug;
        return slug == title;
    });
    return {
      ...category
    }
  }