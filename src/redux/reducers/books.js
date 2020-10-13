import { SET_BOOKS } from "../actions";

const initialState = {
  books: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      const books = action.payload;
      return {
        ...state,
        books,
        loading: false,
      };

    default:
      return state;
  }
};
