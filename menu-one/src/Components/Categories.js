import React,{useState} from 'react'

const Categories = ({filterItems, final}) => {
    const [isAll, setIsAll] = useState(true);
    return (
        <div className="btn-container">
          {final.map((value)=>{

return( 
<div>
 <button className="filter-btn">{value}</button>
</div>)

          })}
        </div>
    )
}

export default Categories
