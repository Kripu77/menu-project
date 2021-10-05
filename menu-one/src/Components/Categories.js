import React,{useState} from 'react'

const Categories = ({filterItems, final}) => {
    const [isAll, setIsAll] = useState(true);
    return (
        <div className="btn-container" >
          {final.map((value ,index)=>{

return( 
<div className="btn-container" key={index}>
 <button key={index} className="filter-btn" onClick={()=>filterItems(value)}>{value}</button>
</div>)

          })}
        </div>
    )
}

export default Categories
