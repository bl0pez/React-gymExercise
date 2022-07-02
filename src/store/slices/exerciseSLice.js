import { createSlice } from '@reduxjs/toolkit';

export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: {
        isLoading: false,
        exercises: [],
        error: null,
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        }
    }
});





export const { startLoading } = exerciseSlice.actions;