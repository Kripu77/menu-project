import React from 'react'

const Menu = ({menuItems}) => {
    return (
        <div className='section-center'>
            {/* mapping over all the menu item */}
            {menuItems.map((value)=>{
                const{id, title, name, desc, img, price} = value;
                return <div key={id} className='menu-item'>
                     <img src={img} alt={title} className="photo"/>
                     <div className='item-info'>
                         <header>

                     
                    <h2>{title}</h2>
                    <p className="price">$ {price}</p>
                        </header>
                    <p className='item-text'>{desc}</p>
                   
                    </div>
                    </div>
            })}
        </div>
    )
}

export default Menu
