import React,{useState} from 'react';
import "./CSS/index.css";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu"
import data from "./Components/data";
const allBtns = new Set(data.map((value)=>{
    console.log(value.category);
    return value.category

}))
const finalBtn = Array.from( allBtns);
finalBtn.push("all");
console.log(finalBtn);



const App = () => {
    const[menuItems, setMenuItems ] = useState(data); //if we declare state in a central state then it is accessible from anywhere
const filterFn = (items)=>{
    if (items === 'all'){
        return setMenuItems(data);
    
    }
   setMenuItems(data.filter((value)=>{
       return value.category === items;
   }))
}
    return (
        <main>
      <section className="menu section">
        <div className="title">
          <h2> KK's Kitchen menu</h2>
          <div className="underline"></div>
        </div>
        <Menu allBtns={finalBtn} filterFn={filterFn}/>
        {/* passing in our menuItems as props */}
        <Categories menuItems={menuItems}/> 
     
      </section>
    </main>
    )
}

export default App
