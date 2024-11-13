// RecipeDetailPage.jsx
import "../pages/RecipeDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data/data.json";

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Load recipes from data.json and localStorage
    const loadRecipeData = async () => {
      const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      const allRecipes = [...data, ...savedRecipes];
      const foundRecipe = allRecipes.find((recipe) => recipe.id === id);
      setRecipe(foundRecipe);
    };

    loadRecipeData();
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="details-container">
      <h3>{recipe.name} - Recipe:</h3>
      <p>Description: {recipe.description}</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Prep: {recipe.preparation}</p>
      <p>Amount of Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
      <img src={recipe.image} alt={recipe.name} />
    </div>
  );
}

export default RecipeDetailsPage;
