import React, { useState } from 'react'
import '../css/Header.css'
import '../css/mobil.css'
import { CiShoppingBasket } from "react-icons/ci";
/* import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci"; */
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { setDrawer } from '../redux/basketSlice';
import { useDispatch,useSelector } from 'react-redux';
import logo2 from "../images/logo2.png";
 



function Header() {
    const navigate = useNavigate();
    const dispacth = useDispatch();
   const {products } = useSelector((store)=> store.basket);
    const [change, setChange] = useState(false);
    const Change = ()=>{
        const root = document.getElementById("root");
        
        if(change){
            root.style.background="black";
            root.style.color ="white";

        }
        else{
            root.style.background="white";
            root.style.color ="black";
        }
        setChange(!change);
    }
  return (
    <div className='all-flex'>
        <div className='flex-row'>
            <img onClick={()=>navigate("/")} className='logo' src={logo2} alt="logo" />
           
        </div>
        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Axtar'/>
            <div>
               {/*  { dispacth(setDrawer())
                    change ? <FaMoon className='icon' onClick={Change} /> :  <CiLight className='icon' onClick={Change} />
                } */}
                 <Badge  onClick={()=> { if(products.length==0){
                  alert("Səbətdə məhsul yoxdur")
                 } 
                 else{
                      dispacth(setDrawer())
                 }}} badgeContent={products.length} color="secondary">
                     <CiShoppingBasket  style={{marginRight:"6px"}} className='icon' />
      
    </Badge>
               
            </div>
        </div>
    </div>
  )
}

export default Header