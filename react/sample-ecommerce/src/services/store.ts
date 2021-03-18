import { configureStore } from '@reduxjs/toolkit'
import itemDataReducer from './itemDataSlice';
import cartReducer from './cartSlice';

export default configureStore({
    reducer: {
        itemDataReducer: itemDataReducer,
        cartReducer: cartReducer
    }
});