import React from 'react'

const Menu = ({isMenu}) => {
    console.log(isMenu)
    return (
        <div>
           {isMenu.map((value)=>{
               const{id, desc, img, title, name} = value;
               return(<div key={id}>
                   <h3> {title}</h3>
                   <p> {title}</p>
                   <p>{name}</p>
                   <p>{desc}</p>
                   <img src={img}/>
                
                   
                    </div>)

           })}
            </div> )
     }

export default Menu
