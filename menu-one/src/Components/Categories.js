import React from 'react'

const Categories = ({finalBtn, filterFn}) => {
    return (
        <div className="btn-container">
        {
          finalBtn.map((value, index)=>{
                return <div key={index}  >
<button className="filter-btn" onClick={()=>filterFn(value)}>{value}</button>
                
            </div>

          })
        }
        </div>
    )
}

export default Categories
