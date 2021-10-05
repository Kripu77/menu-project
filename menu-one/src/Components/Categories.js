import React,{useState} from 'react'

const Categories = ({filterItems}) => {
    const [isAll, setIsAll] = useState(true);
    return (
        <div className="btn-container">
            <button className="filter-btn" onClick={()=>filterItems('breakfast')}> Breakfast  </button>
    
             <button className="filter-btn" onClick={()=>filterItems('lunch')}>Lunch </button>
              <button className="filter-btn" onClick={()=>filterItems('all')}> Shakes </button>
        </div>
    )
}

export default Categories
