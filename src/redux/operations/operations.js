import { createAsyncThunk, getState } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const data = await api.products.get()
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (data, {rejectWithValue}) => {
        try {
            const res = await api.orders.add(data)
            return res
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    (data, {getState}) => {
        const order = getState().slice.order
        const updatedOrder = [...order, data]
        console.log(updatedOrder)
        return updatedOrder
    }
)