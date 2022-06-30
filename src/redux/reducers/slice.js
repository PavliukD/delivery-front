import { createSlice } from "@reduxjs/toolkit";

import {fetchProducts, addOrder, createOrder} from '../operations/operations'

const initialState = {
    shopList: [],
    productsList: [],
    order: []
}

const Slice = createSlice({
    name: "Slice",
    initialState,
    reducers: {
        clearPage: (state) => {
          state.currentPage = initialState.currentPage;
        },
      },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.shopList = action.payload.data.shopList
            state.productsList = action.payload.data.productsList
        },
        [fetchProducts.rejected]: (state) => {
            state.shopList = []
            state.productsList = []
        },
        [addOrder.fulfilled]: (state, action) => {
            state.order = []
        },
        [createOrder.fulfilled]: (state, action) => {
            state.order = action.payload
        }
    }
})

export default Slice.reducer