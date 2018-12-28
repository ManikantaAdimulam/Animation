/**
 * Initial state
 */
const initialState = {
  movieData: []
};

/**
 * Reducer
 *
 * @export
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns UpdatedState
 */
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
