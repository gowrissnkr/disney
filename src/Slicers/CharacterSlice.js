import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    allCharacters: [],
    status: 'idle',
    error: null,
}


export const fetchAllCharacters = createAsyncThunk('characters/fetchAll', async () => {
    const response = await axios.get('https://api.disneyapi.dev/characters');
    return response.data;
});

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCharacters.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllCharacters.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allCharacters = action.payload;
            })
            .addCase(fetchAllCharacters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default charactersSlice.reducer;

