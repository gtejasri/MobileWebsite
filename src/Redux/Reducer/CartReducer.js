import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartValues : [],
    totalPrice : 0
}

const CartReducer  = createSlice({
    name:"CartReducer",
    initialState,
    reducers:{
        incrementcart : (state,action) =>{
              state.cartValues.push(action.payload)
              const priceArray = state.cartValues.map(obj => obj.productPrice)
              state.totalPrice = priceArray.reduce((a,b)=> a+b)
        },
        decrementcart : (state,action) =>{
               const index = state.cartValues.findIndex(obj => obj.productName === action.payload.productName)
               if(index > -1){
                state.cartValues.splice(index,1);
               }
               

              const priceArray = state.cartValues.map(obj => obj.productPrice)
             if(priceArray.length > 0){
                state.totalPrice = priceArray.reduce((a,b)=> a+b)
             }else{
                state.totalPrice = 0;
             }
             
        }
    }
})

export const {incrementcart,decrementcart} = CartReducer.actions;
export default CartReducer.reducer;