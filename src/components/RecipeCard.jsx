import React from "react";
import { Link } from 'react-router-dom';

const RecipeCard = props =>{
    return(        
        <div className="card col" key={props.recipe.id}>
            <Link to={`/recipes/${props.recipe.id}`}>
                <img className="card-img-top" src={props.recipe.imgDish} alt={props.recipe.title}/>
                <h3>{props.recipe.title}</h3>
                <div className="card-body">
                    <p><b>Категория:</b> {props.recipe.category}</p>
                    <p><b>Время приготовления:</b> {props.recipe.time} мин.</p>
                    <p><b>Ингредиенты:</b> {props.recipe.ingredients.join(', ')}</p>
                </div>
            </Link>
        </div>        
    );
};

export default RecipeCard;