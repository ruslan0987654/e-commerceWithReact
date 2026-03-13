import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/mobil.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import {  setDrawer , removeFromBasket, } from './redux/basketSlice'


function App() {
 const {products , drawer} = useSelector((store)=>store.basket);
const dispatch = useDispatch();

  return ( 
    
      
        <div>
         <PageContainer>
            <Header/>
            <RouterConfig/>
             <Loading/>
     {        <Drawer anchor='left' onClose={()=>dispatch(setDrawer())} open={drawer} >
 {
  products && products.map((product)=>{
    return ( <>
    
     <div className='draw'>

     <div>
       <img className='drawImg' style={{marginLeft:"6px"}} src={product.image} width={50} height={ 50} alt="" />
      </div>
      <div>
         <h5 className='drawH'  >{product.title}</h5>
         <p className='drawP' style={{marginLeft:"15px"}}>{product.price}  $ ({product.count } ədəd)</p>
      </div>
      <div>
        <button onClick={()=>{ dispatch(removeFromBasket(product.id))}} style={{marginRight:"4px"}}>Sil</button>
      </div>


     </div>

      {/* 
      <div className='draw2'>
      
       <div>
       <img className='drawImg' style={{marginLeft:"6px"}} src={product.image} width={50} height={ 50} alt="" />
      </div>
      
      <div>
         <p className='drawP' style={{marginLeft:"15px"}}>{product.price}  $</p>
      </div>
      <div>
        <button onClick={()=>{ dispatch(removeFromBasket(product.id))}} style={{marginRight:"4px"}}>Sil</button>
      </div>
      </div> <br>
      

       <h5 className='drawH2'  >{product.title}</h5>
      */}
      
      </>
    )
  })
 }
</Drawer> }
            
         </PageContainer>
        </div>
    
  )
}

export default App
