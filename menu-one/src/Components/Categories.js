import React,{useState} from 'react'

const Categories = ({filterItems}) => {
    const [isAll, setIsAll] = useState(true);
    return (
        <div className="btn-container">
            <button className="filter-btn" onClick={()=>filterItems('breakfast')}> Breakfast  </button>
    
            
        </div>
    )
}

export default Categories
