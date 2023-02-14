import { configureStore } from '@reduxjs/toolkit';
import charactersReducers from "./CharacterSlice";

const Store = configureStore({
    reducer: {
        characters: charactersReducers
    }
});

export default Store