import React, {useState} from 'react'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
import "./CSS/index.css"
import data from "./Components/data.js"
import menu from './Components/data.js'

const App = () => {
    const [menu, setMenu] = useState(data);
    const [categories, setCategories] = useState([]);


    const filterItems = (item)=>{
        setMenu(menu.filter((value)=>{
          return  menu.category === item

        }))
    }
    return (
        <main> 
         <section className='menu section'>
             <div className='title'>
                 <h2>KK's Kitchen</h2>
                 <div className="underline">

                 </div>
<Categories filterItems = {filterItems}/>
<Menu  menuItems = {menu}/>
             </div>

         </section>
        </main>
    )
}

export default App
