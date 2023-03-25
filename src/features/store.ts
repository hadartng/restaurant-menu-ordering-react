import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import categoriesReducer from './reducers/categoriesSlice';
import modalReducer from './reducers/modalSlice';
import reviewsReducer from './reducers/reviewsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoriesReducer,
        modal: modalReducer,
        reviews: reviewsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;