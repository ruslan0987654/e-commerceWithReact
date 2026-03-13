import React from 'react'
import '../css/Product.css' 
import { useNavigate } from 'react-router-dom';


function Product({product}) {
    const {id , price , image, description , title} = product;
    const navigate = useNavigate();
  return (
    
        <div className='card'>
       <img  className='image' src={image} alt="foto" />
        <div >
            <p style={{textAlign:"center", height:"50px"}}>{title}</p>
            <h3 style={{textAlign:"center"}}>{price} $ </h3>
        </div>
        <div style={{textAlign:"center"}}>
            <button onClick={()=>navigate("/product-details/"+id)} className='btn' style={{marginBottom:"10px"  }}>Daha çox</button>
        </div>
    </div>
    
  )
}

export default Product