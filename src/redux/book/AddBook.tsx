import axios from "axios";

const CREATE_BOOK = "TYPE-BOOKSTORE/CREATE_BOOK";
const FETCH_BOOK = "TYPE-BOOKSTORE/FETCH_BOOK";

const initialState: {
  title: string;
  author: string;
  description: string;
}[] = [
  {
    title: "",
    author: "",
    description: "",
  },
];

const createBook = (payload: any) => ({
  type: CREATE_BOOK,
  payload,
});

export const fetchbook = (payload: any) => ({
  type: FETCH_BOOK,
  payload,
});

export const addBook = (payload: any) => async (dispatch: any) => {
  axios
    .post(`http://localhost:3000/users/${1}/books`, payload)
    .then((res: any) => {
      console.log(res);

      dispatch(createBook(res.data));
    })
    .catch((error: string) => {
      console.log(error);
    });
};

const addBookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addBookReducer;
