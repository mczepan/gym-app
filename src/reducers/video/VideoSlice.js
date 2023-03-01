import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import requestVideo from 'common/apiVideo';

export const fetchVideoData = createAsyncThunk(
    'video/fetchVideoData',
    async (name) =>
        await requestVideo.get(`/search`, {
            params: {
                query: name,
            },
        })
);

const initialState = {
    videoData: {},
    isLoading: false,
    errorMessage: '',
};

export const videoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideoData.pending, (state, action) => {
            state.isLoading = true;
            state.videoData = [];
        });
        builder.addCase(fetchVideoData.fulfilled, (state, action) => {
            state.videoData = action.payload.data.contents;
            state.isLoading = false;
        });
        builder.addCase(fetchVideoData.rejected, (state, action) => {
            state.videoData = [];
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});
