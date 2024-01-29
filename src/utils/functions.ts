import { VALID_RECIPES } from "./constants";

const findPotionByIngredients = (ingredients: string[]) => {

    return VALID_RECIPES.find(recipe =>
      ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
  }

export {
    findPotionByIngredients
}