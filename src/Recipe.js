import React from "react";
import style from "./assets/css/Recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.container}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt={title} />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
