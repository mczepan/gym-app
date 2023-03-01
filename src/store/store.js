import { configureStore } from '@reduxjs/toolkit';
import { exercisesSlice } from 'reducers/exercises/ExercisesSlice';
import { videoSlice } from 'reducers/video/VideoSlice';

export const store = configureStore({
    reducer: { exercises: exercisesSlice.reducer, video: videoSlice.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
