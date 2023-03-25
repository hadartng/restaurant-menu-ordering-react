import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem, Dish} from '../types';

interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
    cartOpen: boolean;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    cartOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<Dish>) {
            const existingItem = state.items.find(item => item.dish.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                const newItem: CartItem = {
                    dish: action.payload,
                    quantity: 1
                };
                state.items.push(newItem);
            }
            state.totalQuantity++;
            state.totalPrice += action.payload.price;
        },
        removeItem(state, action: PayloadAction<{ id: string; price: number }>) {
            const existingItem = state.items.find(item => item.dish.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.dish.id !== action.payload.id);
                } else {
                    existingItem.quantity--;
                }
                state.totalQuantity--;
                state.totalPrice -= action.payload.price;
                if (state.totalQuantity === 0) {
                    state.cartOpen = false;
                }
            }
        },
        replaceCart(state, action: PayloadAction<CartState>) {
            return action.payload;
        },
        clearCart() {
            return initialState;
        },
        cartOpen(state, action: PayloadAction<{ isOpen: boolean }>) {
            state.cartOpen = action.payload.isOpen;
        }
    },
});

export const {addItem, removeItem, replaceCart, clearCart, cartOpen} = cartSlice.actions;

export default cartSlice.reducer;