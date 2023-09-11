import { configureStore } from '@reduxjs/toolkit';
import LibraryReducer from '../features/library/LibrarySlice';
import FetchBooksSliceReducer from '../features/fetchBooks/FetchBooksSlice';

export const store = configureStore({
    reducer: {
        library: LibraryReducer,
        search : FetchBooksSliceReducer
    },
});