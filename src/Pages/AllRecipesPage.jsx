import { useState, useEffect } from "react";
import RecipeForm from "../components/Recipe-form/RecipeForm";
import RecipeData from "../components/Recipe-data/RecipeData";
import "./AllRecipesPage.css";

function AllRecipesPage() {
  const [recipes, setRecipes] = useState([]);

  // Load initial data dynamically from `data.json` and `localStorage`
  useEffect(() => {
    const loadInitialData = async () => {
      const { default: initialData } = await import("../data/data.json");
      const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
      setRecipes([...initialData, ...savedRecipes]);
    };

    loadInitialData();
  }, []);

  // Function to add a new recipe
  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, { ...newRecipe, id: Date.now().toString() }];
    setRecipes(updatedRecipes);
    localStorage.setItem(
      "recipes",
      JSON.stringify(updatedRecipes.filter((recipe) => !recipes.find((d) => d.id === recipe.id)))
    );
  };

  // Function to delete a recipe by ID
  const deleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
    localStorage.setItem(
      "recipes",
      JSON.stringify(updatedRecipes.filter((recipe) => !recipes.find((d) => d.id === recipe.id)))
    );
  };

  return (
    <div className="recipes-container">
      <RecipeForm addRecipe={addRecipe} />
      <RecipeData recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default AllRecipesPage;
