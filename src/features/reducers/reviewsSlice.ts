import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchReviews} from '../api';
import {Review} from '../types';

interface ReviewsState {
    reviews: Review[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ReviewsState = {
    reviews: [],
    status: 'idle',
    error: null,
};

export const fetchReviewsAsync = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const reviews = await fetchReviews();
        return reviews;
    }
);

const reviewsSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviewsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviewsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviewsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Something went wrong';
            });
    },
});

export default reviewsSlice.reducer;