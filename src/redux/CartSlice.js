import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: []
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            console.log(action.payload)
            state.items.push(action.payload)
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
})

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
