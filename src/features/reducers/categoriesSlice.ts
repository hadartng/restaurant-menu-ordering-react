import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchCategories} from '../api';
import {Category} from '../types';

interface CategoryState {
    categories: Category[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const categories = await fetchCategories();
        return categories;
    }
);

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategoriesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Something went wrong';
            });
    },
});

export default categorySlice.reducer;