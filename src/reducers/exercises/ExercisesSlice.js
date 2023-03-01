import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from 'common/api';
import { bodyParts } from 'helpers/helpers';
import { loadState, saveState } from 'localStorage';

const persistedActiveBodyPartState = loadState();

export const fetchBodyParts = createAsyncThunk(
    'exercises/fetchBodyPartList',
    async () => await request.get(``)
);

export const fetchExercises = createAsyncThunk(
    'exercises/fetchExercises',
    async (bodyPart) => {
        if (bodyPart === 'all') {
            return await request.get(`/exercises`);
        } else {
            return await request.get(`/exercises/bodyPart/${bodyPart}`);
        }
    }
);

export const fetchExerciseDetails = createAsyncThunk(
    'exercises/fetchExerciseDetails',
    async (id) => {
        const response = await request.get(`/exercises/exercise/${id}`);
        return response.data;
    }
);

const initialState = {
    exercises: [],
    exerciseDetails: {},
    bodyParts: bodyParts,
    activeBodyPart: persistedActiveBodyPartState
        ? persistedActiveBodyPartState
        : 'all',
    isLoading: false,
    errorMessage: '',
};

export const exercisesSlice = createSlice({
    name: 'exercises',
    initialState: initialState,
    reducers: {
        setActiveBodyPart(state, action) {
            saveState(action.payload);
            state.activeBodyPart = action.payload;
        },
    },
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
            // state.isLoading = false;
        });
        builder.addCase(fetchBodyParts.rejected, (state, action) => {
            state.bodyParts = [];
            // state.isLoading = false;
            state.errorMessage = action.error.message;
        });
        builder.addCase(fetchExercises.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchExercises.fulfilled, (state, action) => {
            state.exercises = action.payload.data;
            state.isLoading = false;
        });
        builder.addCase(fetchExercises.rejected, (state, action) => {
            state.exercises = [];
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });

        builder.addCase(fetchExerciseDetails.pending, (state, action) => {
            state.isLoading = true;
            state.exerciseDetails = {};
        });
        builder.addCase(fetchExerciseDetails.fulfilled, (state, action) => {
            state.exerciseDetails = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchExerciseDetails.rejected, (state, action) => {
            state.exerciseDetails = {};
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});

export const { setActiveBodyPart } = exercisesSlice.actions;
