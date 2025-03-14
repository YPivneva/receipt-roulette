import React, {useState, useEffect} from 'react';

function FetchData({ recipes }){
    const [filteredItems, setFilteredItems] = useState(recipes || []);
    const [category, setCategory] = useState("");
    const [maxTime, setMaxTime] = useState(""); 
    
    const handleMaxTimeChange = (e) => {
        setMaxTime(e.target.value);
    };
    const filterByCategory = (category) => {
        setCategory(category);
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
    
    const categories = Array.from(
        new Set(recipes.map((recipe)=> recipe.category))
    )
    const clearAllFilters = () => {
        setCategory("");
        setMaxTime("");
    }

    return (
        <div className="container">            
            <h2>Список рецептов</h2>
            <div className='panel-filter'>
                <select 
                  onChange={e=>filterByCategory(e.target.value)} 
                  className="form-select" 
                  value={category}
                >
                    <option value="" disabled selected>
                        Тип категории
                    </option>
                    {categories.map(category => {
                        return <option key={category}>{category}</option>
                    })}
                </select>
                <div className='form-time'>
                    <label className="col-form-label" htmlFor="max-time">Максимальное время приготовления (мин): </label>
                    <input
                        type="number"
                        id="max-time"
                        className="form-control"
                        value={maxTime}
                        onChange={handleMaxTimeChange}
                        placeholder="Введите время"
                    />
                </div>
                <button className='btn btn-outline-secondary' onClick={clearAllFilters}>Очистить фильтр</button>
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
                {filteredItems.length === 0 && (
                    <div>
                        <p>По заданным критериям нет рецептов</p>
                    </div>
                )}
		    </div>
        </div>
    );
}

export default FetchData;