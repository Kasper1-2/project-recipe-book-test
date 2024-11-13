import { useState, useEffect } from "react";
import RecipeData from "../components/Recipe-data/RecipeData"
import "./AllRecipesPage.css"
import RecipeForm from "../components/Recipe-form/RecipeForm";
import CustomRecipeForm from "../components/Recipe-form/CustomRecipeForm";

function AllRecipesPage() {


    return (
        <div className="recipes-container">
        <RecipeData />
        <CustomRecipeForm/>
        <RecipeForm />
      </div>
    );
}


export default AllRecipesPage;