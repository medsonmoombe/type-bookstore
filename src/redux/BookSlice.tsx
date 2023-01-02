import { createSlice } from '@reduxjs/toolkit'

type BOOK = {
    book:{
        title:string,
        author: string,
        category: string,
        description: string,
    }
}
const initialState: BOOK = {
    book : {
        title: "",
        author:"",
        category: "",
        description: "",
    }
}

const books = createSlice({
  name: "book",
  initialState,
  reducers: {
    GET_BOOKS : (state, action) => {
      return action.payload
    },
    // SET_INCART: (state, action) => {
    //   state.products.cart = true
    // }
  }
});

export const { GET_BOOKS} = books.actions

export default books.reducer