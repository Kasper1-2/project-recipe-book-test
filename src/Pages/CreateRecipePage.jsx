import React from "react";
import Form from "../components/Form/Form";
import RecipeData from "../components/Recipe-data/RecipeData";

function CreateRecipePage() {
  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        <RecipeData />
      </div>
    </>
  );
}

export default CreateRecipePage; 