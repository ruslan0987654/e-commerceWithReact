import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import  {useEffect  } from 'react'
import { gettAllProduct } from '../redux/productSlice';
import Product from './Product';
import '../css/Product.css' 

function ProductList() {
    const dispact = useDispatch();
    const {products} = useSelector((store)=>store.product)
    useEffect(()=>{
        dispact(gettAllProduct())
    },[])
  return (
    <div className='cards'>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product} />
        ))
      }
    </div> 
  )
}

export default ProductList