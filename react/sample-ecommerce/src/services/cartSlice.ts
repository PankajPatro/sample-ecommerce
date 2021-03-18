import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelectorHook } from 'react-redux';
import { ItemData } from '../models/itemData';

export interface CartDataState {
    itemData: ItemData,
    count: number,
    id: number
}

export interface CartState {
    cartData: CartDataState[],
    count: number,
}

const initialState = {
    cartData: [],
    count: 0
} as CartState

export type CartType = {
    cartReducer: CartState
}

export const useCartSelector = createSelectorHook<CartType>()

export const cartSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ItemData>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.cartData.findIndex(c => c.id === action.payload.id) >= 0) {
                const cartItem = state.cartData[state.cartData.findIndex(c => c.id === action.payload.id)];
                state.cartData.splice(state.cartData.findIndex(c => c.id === action.payload.id), 1, {
                    count: cartItem.count + 1,
                    id: cartItem.id,
                    itemData: cartItem.itemData
                });
            }
            else {
                state.cartData.push({
                    count: 1,
                    id: action.payload.id,
                    itemData: action.payload
                });
            }
            state.count = state.count + 1;
        },
        remove: (state, action: PayloadAction<ItemData>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            if (state.cartData.findIndex(c => c.id === action.payload.id) >= 0) {
                const cartItem = state.cartData[state.cartData.findIndex(c => c.id === action.payload.id)];
                if (cartItem.count !== 1) {
                    state.cartData.splice(state.cartData.findIndex(c => c.id === action.payload.id), 1, {
                        count: cartItem.count - 1,
                        id: cartItem.id,
                        itemData: cartItem.itemData
                    });
                }
                else{
                    state.cartData.splice(state.cartData.findIndex(c => c.id === action.payload.id), 1);
                }
            }
            state.count = state.count - 1;
        },
    }
})

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer