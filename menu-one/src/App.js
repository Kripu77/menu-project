import React, {useState} from 'react'
import data from './Components/data';
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import "./CSS/index.css"

const allBtns = new Set(data.map((value)=> value.category)) //set method only returns unique value i.e. not repeated but in terms of object 


const finalBtn = Array.from(allBtns);
finalBtn.push('all');
console.log(finalBtn);


const App = () => {
    const [menuItems, setMenuItems] = useState(data);

    const filterFn = (value)=>{

        if(value==="all"){
            return setMenuItems(data);
        }
         setMenuItems(data.filter((values)=>{
             return values.category === value;
         }))
    }

    return (
       <main>
      <section className="menu section">
        <div className="title">
          <h2>KK'S Kitchen menu</h2>
          <div className="underline"></div>
        </div>
        <Categories finalBtn={finalBtn} filterFn={filterFn}/>
        <Menu menuItems={menuItems} />
      </section>
    </main>
    )
}

export default App
