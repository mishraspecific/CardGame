export const getCardHeight = (width, height) => {
  return width > height ? width / 3 : height / 4;
};

export const getCardWidth = (width, height) => {
  return width > height ? width / 4 : height / 3;
};

export const isPortrait = (width, height) => {
  return height > width;
};
