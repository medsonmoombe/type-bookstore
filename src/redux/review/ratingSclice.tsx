const FETCH_RATING = "TYPE-BOOKSTORE/FETCH_RATING";

export const fetchRatings = (payload: any) => ({
  type: FETCH_RATING,
  payload,
});

const initialState: string[] =[];

 


const fetchratingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_RATING:
      return action.payload;
    default:
      return state;
  }
};

export default fetchratingReducer;