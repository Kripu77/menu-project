import React from 'react'

const Categories = ({menuItems}) => {
    return (
        <div>
       {menuItems.map((value)=>{
           const {id, title, category, desc, img} = value;

           return <section key={id}>
               <h2>{title}</h2>
               <p>{category}</p>
               <p>{desc}</p>
               <img className="photo" src={img} alt={title}/>

           </section>
       })}
        </div>
    )
}

export default Categories;
