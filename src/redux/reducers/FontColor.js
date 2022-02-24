const inititalState = "#000000";

const changeFontColor = (state = inititalState, action) => {
  switch (action.type) {
    case "FONT_COLOR":
      return action.payload;

    default:
      return state;
  }
};

export default changeFontColor;
