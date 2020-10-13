import { SET_AUTHORS } from "../actions";

const initialState = {
  authors: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      const authors = action.payload;
      return {
        ...state,
        authors,
        loading: false,
      };

    default:
      return state;
  }
};
