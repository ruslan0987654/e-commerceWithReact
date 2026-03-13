import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import  ProductDEtails  from '../components/ProductDEtails';

function RouterConfig() {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product-details/:id' element={<ProductDEtails/>}/>
   </Routes>
  )
}

export default RouterConfig