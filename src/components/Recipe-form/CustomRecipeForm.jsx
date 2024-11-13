import { useState } from "react";
import { Link } from "react-router-dom";
import "./CustomRecipeForm.css";
import data from "/src/data/data.json";


function CustomRecipeForm() {
  const [recipes, setRecipes] = useState(data); 
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: [""],
    calories: "",
    servings: 1,
    preparation: "",
    description: "",
  });

  // Function to handle changes to new recipe fields
  const handleNewRecipeChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleNewIngredientChange = (index, value) => {
    const updatedIngredients = [...newRecipe.ingredients];
    updatedIngredients[index] = value;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: updatedIngredients,
    }));
  };

  const addIngredientField = () => {
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ""],
    }));
  };

  const handleNewRecipeSubmit = (event) => {
    event.preventDefault();
    const newRecipeWithId = {
      ...newRecipe,
      id: `dish-${recipes.length + 1}`, // Assign a unique id based on length
    };
    setRecipes((prevRecipes) => [...prevRecipes, newRecipeWithId]);

    // Reset the new recipe form
    setNewRecipe({
      name: "",
      ingredients: [""],
      calories: "",
      servings: 1,
      preparation: "",
      description: "",
    });
  };

  return (
    <div className="container">
      <div className="custom-form">
        <form onSubmit={handleNewRecipeSubmit}>
          <div>
            <label>New Recipe Name:</label>
            <input
              type="text"
              name="name"
              value={newRecipe.name}
              onChange={handleNewRecipeChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={newRecipe.description}
              onChange={handleNewRecipeChange}
              required
            />
          </div>
          <div>
            <label>Calories:</label>
            <input
              type="number"
              name="calories"
              value={newRecipe.calories}
              onChange={handleNewRecipeChange}
              required
            />
          </div>
          <div>
            <label>Servings:</label>
            <input
              type="number"
              name="servings"
              value={newRecipe.servings}
              onChange={handleNewRecipeChange}
              required
            />
          </div>
          <div>
            <label>Ingredients:</label>
            {newRecipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                value={ingredient}
                onChange={(e) => handleNewIngredientChange(index, e.target.value)}
                required
              />
            ))}
            <button type="button" onClick={addIngredientField}>
              Add Ingredient
            </button>
          </div>
          <div>
            <label>Preparation:</label>
            <textarea
              name="preparation"
              value={newRecipe.preparation}
              onChange={handleNewRecipeChange}
              required
            />
          </div>
          <button type="submit">Add Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default CustomRecipeForm;
