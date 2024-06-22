// src/App.jsx

import './App.css';
import { useState } from 'react';

import BurgerStack from './components/BurgerStack';
import IngredientsList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (index) => {
    const newStack = [...stack];
    newStack.splice(index, 1);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section className="container">
        <div className="ingredient-list">
          <h2>Ingredient List</h2>
          <ul>
            {availableIngredients.map((ingredient, index) => (
              <li key={index}>
                <button onClick={() => addToBurger(ingredient)}>
                  Add {ingredient.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="burger-stack">
          <h2>Burger Stack</h2>
          <ul>
            {stack.map((ingredient, index) => (
              <li key={index}>
                <div
                  className="burger-ingredient"
                  style={{ backgroundColor: ingredient.color }}
                >
                  {ingredient.name}
                  <button onClick={() => removeFromBurger(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default App;
