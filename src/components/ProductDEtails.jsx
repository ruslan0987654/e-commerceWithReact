import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { setSelectProduct } from '../redux/productSlice';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import '../css/ProductDEtails.css'
import { addToBasket } from '../redux/basketSlice';


function ProductDEtails() {

   const dispacth = useDispatch();
   const {selectProduct} = useSelector((store)=> store.product)
  const {price, image, title,description} = selectProduct;
 
  const [count,setCount] = useState(0);
  const increseCount=()=>{
   setCount(count+1)
  } 
   const decreCount=()=>{
    if(count>0){
 setCount(count-1)
    }
   
  }
  const addBasket=()=>{
     if(count === 0){
    alert("Ən azı 1 məhsul seçin");
    return;
  }
    const payload ={
      id,
      price,
      image,
      title,
      description,
      count
    }
    dispacth(addToBasket(payload))
    alert("Məhsul səbətə əlavə edildi")
  }
//    const { price , image, description , title} = selectProduct;
    const {id} = useParams();
    const {products } = useSelector((store)=> store.product);
   
   
    useEffect(()=>{
      getProductById();
    },[])
    
     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const getProductById = ()=>{
        products && products.map((product)=>{
          if(product.id == id){
           dispacth(setSelectProduct(product));
          }
        })
    }
  return (
    <div className='product-details'  /* style={{marginTop:"30px" , display:"flex", flexDirection:"row",justifyContent:"center"}} */>
        <div style={{marginRight:"40px"}}>
            <img className='details-img' /* width={280} height={450} */ src={selectProduct.image} alt="" />
        </div>
        <div>
            <h2>{selectProduct.title}</h2>
            <h4>{selectProduct.description}</h4>
            <div className='price'>
              <h1>{selectProduct.price}  $</h1>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                   <CiCirclePlus onClick={()=>increseCount()} className='plus-minus'/> <span style={{fontSize:"26px",userSelect:"none"}}>{count} </span> <CiCircleMinus onClick={()=>decreCount()} className='plus-minus' />
            </div>
            <div >
              <button onClick={addBasket} className='btn2'>Əlavə et</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDEtails