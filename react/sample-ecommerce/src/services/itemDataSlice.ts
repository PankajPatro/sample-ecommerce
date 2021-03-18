import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSelectorHook } from 'react-redux';
import { ItemData } from '../models/itemData';

export interface ItemDataState {
    itemData: ItemData[],
    filteredData: ItemData[],
    isLoading: boolean,
    filterText: string
}

const initialState = {
    itemData: [],
    filteredData: [],
    isLoading: false,
    filterText: ''
} as ItemDataState

export type ItemDataType = {
    itemDataReducer: ItemDataState
}

export const useItemDataSelector = createSelectorHook<ItemDataType>()

export const itemDataSlice = createSlice({
    name: 'itemData',
    initialState,
    reducers: {
        filter: (state, action: PayloadAction<string>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.filteredData = state.itemData.filter(i => i.category.startsWith(action.payload) || i.imageTitle.startsWith(action.payload) || i.imageDescription.startsWith(action.payload));
            state.filterText = action.payload;
        },
        start(state) {
            state.isLoading = true
        },
        success(state: ItemDataState, action: PayloadAction<ItemData[]>) {
            state.itemData = action.payload
            state.isLoading = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { filter, start, success } = itemDataSlice.actions

export default itemDataSlice.reducer