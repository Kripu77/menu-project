import React,{useState} from 'react'
import data from './Components/data'
import Categories from "./Components/Categories";
import Menu from "./Components/Menu"
import "./CSS/index.css";
const App = () => {
    const [isMenu, setIsMenu] = useState(data);
    return (
 
            <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
         <Categories/> 
           <Menu isMenu={isMenu}/>
      </section>
    </main>
          
     
    )
}

export default App
