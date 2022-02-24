export const incrementNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrementNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const changeFontColour = (color) => {
  return {
    type: "FONT_COLOR",
    payload: color,
  };
};
