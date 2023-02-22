import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'common/api';

export const fetchBodyParts = createAsyncThunk(
    'exercises/bodyPartList',
    async () => await request.get(``)
);

const initialStateBodyPart = {
    bodyParts: [
        'back',
        'cardio',
        'chest',
        'lower arms',
        'lower legs',
        'neck',
        'shoulders',
        'upper arms',
        'upper legs',
        'waist',
    ],
    isLoading: false,
    errorMessage: '',
};

export const exercisesSlice = createSlice({
    name: 'notes',
    initialState: initialStateBodyPart,
    extraReducers: (builder) => {
        builder.addCase(fetchBodyParts.pending, (state, action) => {
            // state.isLoading = true;
            // state.bodyParts = [];
        });
        builder.addCase(fetchBodyParts.fulfilled, (state, action) => {
            // state.bodyParts = [
            //     'back',
            //     'cardio',
            //     'chest',
            //     'lower arms',
            //     'lower legs',
            //     'neck',
            //     'shoulders',
            //     'upper arms',
            //     'upper legs',
            //     'waist',
            // ];
            state.isLoading = false;
        });
        builder.addCase(fetchBodyParts.rejected, (state, action) => {
            state.bodyParts = [];
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});
