// src/components/IngredientList.jsx

import React from 'react';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
