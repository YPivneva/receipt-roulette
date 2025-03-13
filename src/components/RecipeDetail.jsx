import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <h2>Рецепт не найден</h2>;
  }

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <img src={`.${recipe.imgDish}`} alt={recipe.title} />
      <p><b>Категория:</b> {recipe.category}</p>
      <p><b>Время приготовления:</b> {recipe.time} мин.</p>
      <p><b>Ингредиенты:</b> {recipe.ingredients.join(', ')}</p>
      <p><b>Инструкции:</b> {recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;