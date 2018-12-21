const initialState = {
  movieData: []
};

export function reducer(state = initialState, action) {
  if (action.type === "GET_DATA_SUCCESS") {
    return {
      ...state,
      movieData: action.data.data.data.movies
    };
  }
  return {
    ...state
  };
}
