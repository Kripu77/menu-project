import React,{useState} from 'react';
import "./CSS/index.css";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu"
import data from "./Components/data";

const App = () => {
    const[menuItems, setMenuItems ] = useState(data);

    return (
        <main>
      <section className="menu section">
        <div className="title">
          <h2> KK's Kitchen menu</h2>
          <div className="underline"></div>
        </div>
        <Menu/>
        <Categories menuItems={menuItems}/>
     
      </section>
    </main>
    )
}

export default App
