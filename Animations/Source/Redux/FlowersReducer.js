const initialState = {
  dataSource: [
    {
      title: "",
      imageUrl: ""
    }
  ]
};

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
