import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuiv4 } from 'uuid'

const initialState = {
    books: []
};

const updateLocalStorage = newBooksArray => {
    localStorage.setItem('booksData', JSON.stringify(newBooksArray))
}

const LibrarySlice = createSlice({
    name:'library',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const newBook ={id: uuiv4(), title: action.payload.title, author: action.payload.author};
            state.books.push(newBook);
            updateLocalStorage(state.books);
        },
        getLocalStorageData: state => {
            state.books = JSON.parse(localStorage.getItem('booksData'));   
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
            updateLocalStorage(state.books);
        },
        deleteAllBooks: state => {
            state.books = [];
            updateLocalStorage(state.books);
        }
    }
})

export default LibrarySlice.reducer;
export const { addBook, getLocalStorageData, deleteBook, deleteAllBooks } = LibrarySlice.actions;