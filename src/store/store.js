import { configureStore } from '@reduxjs/toolkit';
import { exercisesSlice } from 'reducers/exercises/ExercisesSlice';

export const store = configureStore({
    reducer: {
        bodyParts: exercisesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
