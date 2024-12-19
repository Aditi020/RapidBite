// store/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
        updateQuantity: (state, action) => {
            const { id, type } = action.payload;
            const item = state.cartItems.find((item) => item.id === id);
            if (item) {
                if (type === "increment") {
                    item.quantity += 1;
                } else if (type === "decrement") {
                    if (item.quantity === 1) {
                        // If the quantity is 1 and decrement is triggered, remove the item
                        state.cartItems = state.cartItems.filter((item) => item.id !== id);
                    } else {
                        item.quantity -= 1;
                    }
                }
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
