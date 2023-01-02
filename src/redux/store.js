import { configureStore } from '@reduxjs/toolkit';
import addBookReducer from './book/AddBook';
import fetchbookReducer from './book/BookList';


// const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    books: addBookReducer,
    book: fetchbookReducer
  },
});
// store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;