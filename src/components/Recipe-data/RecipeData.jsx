import RecipeCard from "../Cards/RecipeCard";
import "../Recipe-data/RecipeData.css";

function RecipeData({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-data">
      {recipes.map((food) => (
        <RecipeCard key={food.id} food={food} deleteRecipe={deleteRecipe} />
      ))}
    </div>
  );
}

export default RecipeData;
