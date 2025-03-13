import React, {useState, useEffect} from 'react';
import Header from './Header';

function FetchData({ recipes }){
    <FetchData recipes={recipes } />
    const [filteredItems, setFilteredItems] = useState(recipes || []);
    const [category, setСategories] = useState();
    // const [time, setTime] = useState();
    const [maxTime, setMaxTime] = useState('');
    

    const filterByCategory = (category) =>{
        setFilteredItems(
            recipes.filter((recipe)=>{
                return recipe.category === category;
            })
        )
    }
    const handleMaxTimeChange = (e) => {
        setMaxTime(e.target.value);
    };

    useEffect(()=>{
        setFilteredItems(
            recipes.filter((recipe)=>{
                return( 
                    (!category || recipe.category === category) && 
                    (!maxTime || recipe.time <= maxTime)
                );
             })
        )
    }, [category, maxTime, recipes]);
    const categorys = Array.from(
        new Set(recipes.map((recipe)=> recipe.category))
    )

    return (
        <div className="container">
            <Header categories={categorys} filterByCategory={filterByCategory} />
            <h2>Список рецептов</h2>
            {/* <select onChange={e=>filterByCategory(e.target.value)} name="" id="">
                <option value="" disabled selected>
                    Тип категории
                </option>
                {categorys.map(category => {
                    return <option key={category}>{category}</option>
                })}
            </select> */}
            <div>
                <label htmlFor="max-time">Максимальное время приготовления (мин): </label>
                <input
                    type="number"
                    id="max-time"
                    value={maxTime}
                    onChange={handleMaxTimeChange}
                    placeholder="Введите время"
                />
            </div>
            <div className="row row-cols-3">
                {filteredItems.map((recipe) => (
                    
                <div className="card col" key={recipe.id}>
                    <img className="card-img-top" src={recipe.imgDish} alt="noname"/>
                    <h3>{recipe.title}</h3>
                    <div className="card-body">
                        <p><b>Категория:</b> {recipe.category}</p>
                        <p><b>Время приготовления:</b> {recipe.time} мин.</p>
                        <p><b>Ингредиенты:</b> {recipe.ingredients.join(', ')}</p>
                    </div>
                </div>
                ))}
		    </div>
        </div>
    );
}

export default FetchData;