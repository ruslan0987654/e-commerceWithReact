import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const getBasketFromStorage = () => {
  try {
    const basket = localStorage.getItem("basket");
    return basket ? JSON.parse(basket) : [];
  } catch (error) {
    return [];
  }
};
const initialState = {
  products : getBasketFromStorage(),
  drawer : false
}
 const writeFromBasketStroage =(basket)=>{
    localStorage.setItem("basket", JSON.stringify(basket))
 }
   

export const basketSlice = createSlice({
    name : "basket",
    initialState,
    reducers:{
      
      addToBasket :(state,action)=>{
      const findProduct= state.products && state.products.find((product)=>product.id===action.payload.id)
      if(findProduct){
     const extraProdcuts =  state.products.filter((product)=>product.id !== action.payload.id);
     findProduct.count += action.payload.count;
     state.products = [...extraProdcuts, findProduct]
     writeFromBasketStroage(state.products)
      }
      else{
        /* state.products =[...state.products , action.payload];
        writeFromBasketStroage(state.products) */
        if(action.payload.count===0){
         
        }
        else{
           state.products =[...state.products , action.payload];
        writeFromBasketStroage(state.products)
        }
      }
      },
      setDrawer :(state)=>{
         state.drawer=!state.drawer
      },
      removeFromBasket: (state, action) => {

  const newBasket = state.products.filter(
    (product) => product.id !== action.payload
  );

  state.products = newBasket;
  writeFromBasketStroage(newBasket);

        
}

    }
})
export const {  addToBasket , setDrawer,removeFromBasket} = basketSlice.actions

export default basketSlice.reducer