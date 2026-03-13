import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  products : [],
  selectProduct : {},
  loading : false
}
const url = "https://fakestoreapi.com";
export const gettAllProduct = createAsyncThunk("gettAllProduct", async()=>{
  const respon = await axios.get(`${url}/products`)
  
  return respon.data
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectProduct : (state, action)=>{
     state.selectProduct = action.payload;
    }
  },
  extraReducers : (builder)=> {
     builder.addCase(gettAllProduct.pending, (state)=>{
     state.loading = true;
  })

  builder.addCase(gettAllProduct.fulfilled, (state,action)=>{
   state.loading = false;
   state.products = action.payload;
  })
  }
})
export const {  setSelectProduct} = productSlice.actions

export default productSlice.reducer