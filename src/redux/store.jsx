import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import productReducer from './productSlice'
import basketReducer from './basketSlice'

export const store = configureStore({
  reducer: {
    app : appReducer,
    product : productReducer ,
    basket : basketReducer
  },
})