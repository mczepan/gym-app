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
            // await request.get(`/exercises`);
            await request.get(`/`);
        } else {
            // await request.get(`/exercises/bodyPart/${bodyPart}`);
            await request.get(`/`);
        }
    }
);

export const fetchExerciseDetails = createAsyncThunk(
    'exercises/fetchExerciseDetails',
    async (id) => {
        // await request.get(`/exercises/exercise/${id}`);
        await request.get(`/`);
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
    name: 'notes',
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
            state.isLoading = false;
        });
        builder.addCase(fetchBodyParts.rejected, (state, action) => {
            state.bodyParts = [];
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
        builder.addCase(fetchExercises.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchExercises.fulfilled, (state, action) => {
            state.exercises = [
                {
                    bodyPart: 'waist',
                    equipment: 'body weight',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
                    id: '0001',
                    name: '3/4 sit-up',
                    target: 'abs',
                },
                {
                    bodyPart: 'waist',
                    equipment: 'body weight',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0002.gif',
                    id: '0002',
                    name: '45° side bend',
                    target: 'abs',
                },
                {
                    bodyPart: 'waist',
                    equipment: 'body weight',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif',
                    id: '0003',
                    name: 'air bike',
                    target: 'abs',
                },
                {
                    bodyPart: 'upper legs',
                    equipment: 'body weight',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1512.gif',
                    id: '1512',
                    name: 'all fours squad stretch',
                    target: 'quads',
                },
                {
                    bodyPart: 'waist',
                    equipment: 'body weight',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0006.gif',
                    id: '0006',
                    name: 'alternate heel touchers',
                    target: 'abs',
                },
                {
                    bodyPart: 'back',
                    equipment: 'cable',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0007.gif',
                    id: '0007',
                    name: 'alternate lateral pulldown',
                    target: 'lats',
                },
                {
                    bodyPart: 'lower legs',
                    equipment: 'body weight',
                    gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1368.gif',
                    id: '1368',
                    name: 'ankle circles',
                    target: 'calves',
                },
            ];
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
            state.exerciseDetails = {
                bodyPart: 'waist',
                equipment: 'body weight',
                gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
                id: '0001',
                name: '3/4 sit-up',
                target: 'abs',
            };
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
