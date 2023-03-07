import { useState } from "react";
import { RecipeItems } from "./RecipeItems";
import { TextInput } from "./ui/TextInput";
import { data as availableRecipes } from "../utils/data.js";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");
  const recipes = availableRecipes.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  // console.log(recipes);

  console.log(recipe);

  const matchedRecipes = availableRecipes.hits.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase() || "");
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput onChange={handleChange} w={180} border="solid" h={10} />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
