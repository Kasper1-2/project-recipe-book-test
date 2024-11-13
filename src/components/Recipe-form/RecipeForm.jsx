import React, { useState } from 'react';
import "./RecipeForm.css"

const RecipeForm = ({ addRecipe }) => {
  const [formData, setFormData] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
    description: '',
    preparation: '',
    ingredients: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      ...formData,
      calories: parseInt(formData.calories, 10),
      servings: parseInt(formData.servings, 10),
      ingredients: formData.ingredients.split(',').map((ingredient) => ingredient.trim())
    };
    addRecipe(newRecipe); // Pass new recipe up to AllRecipesPage
    setFormData({
      name: '',
      calories: '',
      image: '',
      servings: '',
      description: '',
      preparation: '',
      ingredients: ''
    });
  };

  return (
    <form className="recipe-form"onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Recipe Name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="calories" placeholder="Calories" value={formData.calories} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <input type="number" name="servings" placeholder="Servings" value={formData.servings} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <textarea name="preparation" placeholder="Preparation Steps" value={formData.preparation} onChange={handleChange} required />
      <input type="text" name="ingredients" placeholder="Ingredients (comma-separated)" value={formData.ingredients} onChange={handleChange} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
