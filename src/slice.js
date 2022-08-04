import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        CartArr : [],

    },
    reducers : {
        addToCart : (state,action) => {
            state.CartArr = action.payload
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer