initialState = {
  dataSource: [
    {
      key: "0",
      title: "Kingfisher",
      imageUrl:
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
    },
    {
      key: "1",
      title: "Lion",
      imageUrl: "https://i.gifer.com/PL7r.gif"
    },
    {
      key: "2",
      title: "Buzz",
      imageUrl:
        "https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg"
    },
    {
      key: "3",
      title: "Smileys",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPeyBqDtZmAA4t8uRzKy5Zg2ZwvRsQG5qtGyvvdOEbU_YOYia"
    }
  ]
};

export function HomeReducer(state = initialState, action) {
  return {
    ...state
  };
}
