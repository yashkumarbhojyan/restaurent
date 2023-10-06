import React, {useState} from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const Resturant = () => {
    const [menuData, setMenuData]=useState(Menu);


    const filterItem =((category)=>{
         const updatedlist =Menu.filter((curElem) =>{
        return curElem.category === category;
    });
      setMenuData(updatedlist);
    });
  return(
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={()=>filterItem("lunch")}>lunch</button>
            <button className='btn-group__item' onClick={()=>filterItem("evening")}>evening</button>
            <button className='btn-group__item'  onClick={()=>filterItem("dinner")}>dinner</button>
        </div>
    </nav>
    <MenuCard menuData ={menuData}/>
    </>
  );
};

export default Resturant;
