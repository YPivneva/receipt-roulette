import React, { useState } from 'react';

const RecipeForm = ({ recipe }) => {
  const [state, setState] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: "",
    category: "",
    imgDish: "",
  })

  const handleSubmit = e => {
    e.preventDefault();
    
    const newRecipe = {
      id: Date.now(), 
      title: state.title,
      ingredients: state.ingredients.split(',').map(ingredient => ingredient.trim()), 
      instructions: state.instructions,
      time: parseInt(state.time),
      category: state.category,
      imgDish: state.imgDish,
    };
    
    console.log(newRecipe);
    // addRecipe(newRecipe); // Вызываем функцию для добавления рецепта

    setState({ 
      title: "",
      ingredients: "",
      instructions: "",
      time: "",
      category: "",
      imgDish: "",
    });
  };
    
  return (
    <form className="add-recipe" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="title" className="form-label">Название рецепта</label>
        <input
          type="text"
          className="input-recipe"
          name='title'
          placeholder=""
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label for="text" className="form-label">Ингредиенты (через запятую)</label>
        <input
          type="text"
          className="input-recipe"
          name='ingredients'
          placeholder=""
          value={state.ingredients}
          onChange={(e) => setState({ ...state, ingredients: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label for="instructions" className="form-label">Инструкция</label>
        <textarea
          className="input-recipe"
          name='instructions'
          placeholder=""
          value={state.instructions}
          onChange={(e) => setState({ ...state, instructions: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label for="time" className="form-label">Время приготовления</label>
        <input
          type="number"
          className="input-recipe"
          name='time'
          placeholder=""
          value={state.time}
          onChange={(e) => setState({ ...state, time: e.target.value.replace(/\D/g, "") })}
          required
        />
      </div>
      <div className="mb-3">
        <select 
          onChange={(e) => setState({ ...state, category: e.target.value })} 
          className="form-select" 
          name='category'
          value={state.category}
        >
          <option value="" disabled selected>
            Тип категории
          </option>
          <option value="first-courses">первые блюда</option>
          <option value="snacks">закуски</option>
          <option value="second courses">вторые блюда</option>
          <option value="desserts">десерты</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="imgDish" className="form-label">Ссылка на изображение</label>
        <input
          type="text"
          className="input-recipe"
          name='imgDish'
          placeholder=""
          value={state.imgDish}
          onChange={(e) => setState({ ...state, imgDish: e.target.value })}
          required
        />
      </div>
      <button type="submit" className='btn btn-outline-secondary'>Добавить рецепт</button>
    </form>
  );
};

export default RecipeForm;