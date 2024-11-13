import "./RecipeForm.css";
import { useState } from "react";
import data from "/src/data/data.json";

function RecipeForm() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [servings, setServings] = useState(1);
  const [calculatedCalories, setCalculatedCalories] = useState(0);
  const [dishDetails, setDishDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedIngredients, setEditedIngredients] = useState([]);
  const [editedPreparation, setEditedPreparation] = useState("");

  const handleDishChange = (event) => {
    const dishId = event.target.value;
    const dish = data.find((item) => item.id === dishId);
    if (dish) {
      setSelectedDish(dish);
      setServings(dish.servings);
      setCalculatedCalories(dish.calories * dish.servings);

      // Set editable fields to current dish values
      setEditedName(dish.name);
      setEditedIngredients([...dish.ingredients]);
      setEditedPreparation(dish.preparation);
      setIsEditing(false); // Ensure edit mode is off when selecting a new dish
    } else {
      setSelectedDish(null);
      setServings(1);
      setCalculatedCalories(0);
      setEditedName("");
      setEditedIngredients([]);
      setEditedPreparation("");
    }
  };

  const handleServingsChange = (newServings) => {
    if (selectedDish && newServings > 0) {
      setServings(newServings);
      setCalculatedCalories(selectedDish.calories * newServings);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateRecipe = () => {
    if (selectedDish) {
      // Update the selected dish properties
      selectedDish.name = editedName;
      selectedDish.ingredients = editedIngredients;
      selectedDish.preparation = editedPreparation;

      // Update displayed details and exit edit mode
      setDishDetails({
        ingredients: editedIngredients,
        preparation: editedPreparation,
      });
      setIsEditing(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDish) {
      setDishDetails({
        ingredients: editedIngredients,
        preparation: editedPreparation,
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <label htmlFor="dish-select">Create your recipe </label>
            <select id="dish-select" onChange={handleDishChange} defaultValue="">
              <option value="">--select dish--</option>
              {data.map((dish) => (
                <option key={dish.id} value={dish.id}>
                  {dish.name}
                </option>
              ))}
            </select>

            {selectedDish && (
              <div>
                <div>
                  <label>Dish Name:</label>
                  <input
                    type="text"
                    value={editedName}
                    readOnly={!isEditing}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </div>
                <div>
                  <label>Calories:</label>
                  <input type="number" value={calculatedCalories} readOnly />
                </div>
                <div>
                  <label>Servings:</label>
                  <button
                    type="button"
                    onClick={() => handleServingsChange(servings - 1)}
                    disabled={servings <= 1 || isEditing}
                  >
                    -
                  </button>
                  <input type="number" value={servings} readOnly />
                  <button
                    type="button"
                    onClick={() => handleServingsChange(servings + 1)}
                    disabled={isEditing}
                  >
                    +
                  </button>
                </div>

                {/* Edit Ingredients */}
                <div>
                  <label>Ingredients:</label>
                  {editedIngredients.map((ingredient, index) => (
                    <input
                      key={index}
                      type="text"
                      value={ingredient}
                      readOnly={!isEditing}
                      onChange={(e) => {
                        const updatedIngredients = [...editedIngredients];
                        updatedIngredients[index] = e.target.value;
                        setEditedIngredients(updatedIngredients);
                      }}
                    />
                  ))}
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() =>
                        setEditedIngredients([...editedIngredients, ""])
                      }
                    >
                      Add Ingredient
                    </button>
                  )}
                </div>

                {/* Edit Preparation */}
                <div>
                  <label>Preparation:</label>
                  <textarea
                    value={editedPreparation}
                    readOnly={!isEditing}
                    onChange={(e) => setEditedPreparation(e.target.value)}
                  />
                </div>

                {/* Toggle Edit/Save buttons */}
                {!isEditing ? (
                  <button type="button" onClick={handleEditToggle}>
                    Edit
                  </button>
                ) : (
                  <button type="button" onClick={handleUpdateRecipe}>
                    Save Changes
                  </button>
                )}
              </div>
            )}

            <button type="submit">Submit</button>

            {/* ingredients and preparation after submission */}
            {dishDetails && (
              <div>
                <h2>Ingredients:</h2>
                <ul>
                  {dishDetails.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h2>Preparation:</h2>
                <p>{dishDetails.preparation}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default RecipeForm;
