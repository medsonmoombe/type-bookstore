import { configureStore } from '@reduxjs/toolkit';
import addBookReducer from './book/AddBook';
import fetchbookReducer from './book/BookList';
import fetchratingReducer from './review/ratingSclice';


// const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    books: addBookReducer,
    book: fetchbookReducer,
    ratings: fetchratingReducer
  },
});
// store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;