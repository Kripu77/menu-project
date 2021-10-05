import React from 'react'

const Menu = ({allBtns, filterFn}) => {
    return (
        <div>
           {allBtns.map((value, index)=>{
               return <div key={index} className='btn-container'>
                   <button onClick={()=>filterFn(value)}> {value}</button>

</div>
           })}
        </div>
    )
}

export default Menu
