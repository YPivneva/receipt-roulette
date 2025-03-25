import React from 'react';

const FilterPanel = React.memo(({ categories, category, setCategory, maxTime, setMaxTime, clearAllFilters }) => {
    const handleMaxTimeChange = (e) => {
        setMaxTime(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div className='panel-filter'>
            <select 
                onChange={handleCategoryChange} 
                className="form-select" 
                value={category}
            >
                <option value="" disabled>
                    Тип категории
                </option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
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
    );
});

export default FilterPanel;