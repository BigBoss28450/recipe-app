import React, { useEffect, useState } from "react";
import "./App.css";

import { APP_KEY, APP_ID } from "./App_Env";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
