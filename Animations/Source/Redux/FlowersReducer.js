const initialState = {
  data: []
};

export function FlowersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FLOWERS":
      return { ...state };
    case "GET_FLOWERS_SUCCESS":
    console.log(action.data)
      return {
        ...state.data,
        data: action.data.forEach(flower => {
        data.push({
          title: flower.volumeInfo.title,
          imageUrl: flower.volumeInfo.imageLinks.thumbnail
        });
      })
    }
    case "GET_FLOWERS_FAILURE":
      return {
        ...state,
        data: []
      };
    default:
      return { ...state };
  }
}
