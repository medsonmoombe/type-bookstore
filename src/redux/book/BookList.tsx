const FETCH_BOOK = "TYPE-BOOKSTORE/FETCH_BOOK";

export const fetchbook = (payload: any) => ({
  type: FETCH_BOOK,
  payload,
});

const initialState: string[] =[];

 


const fetchbookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default fetchbookReducer;
