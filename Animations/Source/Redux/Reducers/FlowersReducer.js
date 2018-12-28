/**
 * Initial state
 */
const initialState = {
  dataSource: [
    {
      title: "",
      imageUrl: ""
    }
  ]
};

/**
 * Flowers reducer
 *
 * @export
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns Updated state
 */
export function FlowersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FLOWERS":
      return { ...state };
    case "GET_FLOWERS_SUCCESS":
      return {
        ...state,
        dataSource: action.data.map(flower => {
          return {
            title: flower.volumeInfo.title,
            imageUrl: flower.volumeInfo.imageLinks.thumbnail
          };
        })
      };
    case "GET_FLOWERS_FAILURE":
      return {
        ...state,
        data: []
      };
    default:
      return { ...state };
  }
}
