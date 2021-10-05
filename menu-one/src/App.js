import React, {useState} from 'react'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
import "./CSS/index.css"
import data from "./Components/data.js"
import menu from './Components/data.js'
const allBtn = new Set (menu.map((value, index)=>{
    
   return value.category; 
  
}))

const final = Array.from(allBtn);
final.push('all'); //array from will convert our buttons which are in the form of object to array
console.log(final);
const App = () => {
    const [menu, setMenu] = useState(data);
    const [categories, setCategories] = useState([]);


    const filterItems = (item)=>{
        if(item === 'all'){
            return setMenu(data);
        }
        setMenu(menu.filter((value)=>{
          return  value.category === item

        }))
        return setMenu
    }
    return (
        <main> 
         <section className='menu section'>
             <div className='title'>
                 <h2>KK's Kitchen</h2>
                 <div className="underline">

                 </div>
<Categories filterItems = {filterItems} final={final}/>
<Menu  menuItems = {menu}/>
             </div>

         </section>
        </main>
    )
}

export default App
