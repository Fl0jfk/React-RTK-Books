import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GOOGLE_API_KEY = 'AIzaSyAj7lnPdAdBxaFk9HehCnyBD-E1IspNaaE';

const initialState = {
   isLoading: false,
   fetchedBooks: [],
   error: ''
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async arg => {
      const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&key=${GOOGLE_API_KEY}&maxResults=20`)
      return data.items
    }
)

const FetchBooksSlice = createSlice({
    name:'fetchBooks',
    initialState,
    reducers: {},
    extraReducers:builder => {
        builder.addCase(fetchBooks.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchBooks.fulfilled, (state,action) => {
            state.isLoading = false;
            state.fetchedBooks = action.payload;
            state.error = '';
        })
        builder.addCase(fetchBooks.rejected, (state,action) => {
            state.isLoading = false;
            state.fetchedBooks = [];
            state.error = action.error.message;
        })
    }
})

export default FetchBooksSlice.reducer;