import { configureStore } from '@reduxjs/toolkit';
import LibraryReducer from '../features/library/LibrarySlice';

export const store = configureStore({
    reducer: {
        library: LibraryReducer
    },
});