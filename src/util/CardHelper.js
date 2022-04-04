/**
 * [CardHelper.js] created to create all helper
 * methods for card game
 */

/**
 * generate card pair values from 1 to 100 and return as array
 * of length provided
 * @param {Number} length
 * @returns {array}
 */
export const getCardPairValues = length => {
  return getShuffledArr(createArrayOfNumbers(length));
};

/**
 * Shuffle provided array as param for card game and return shuffled array
 * @param {*} arr
 * @returns
 */
const getShuffledArr = arr => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

/**
 *
 * @param {*} length
 * @returns
 */
const createArrayOfNumbers = (length = 12) => {
  let numbersArray = [];
  while (numbersArray.length < length / 2) {
    let randomNum = getRandomNumber(1, 100);
    let isFound = numbersArray.includes(randomNum);
    if (isFound === false) {
      numbersArray.push(randomNum);
    }
  }
  numbersArray = duplicateArray(numbersArray);

  return numbersArray;
};

/**
 * Genrate random number in a given range
 * @param {*} min
 * @param {*} max
 * @returns
 */
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 *It takes array and returned new array with dulicated elements of
 * provided array as param
 * @param {*} arrayToDuplicate
 * @returns
 */
const duplicateArray = arrayToDuplicate => {
  return arrayToDuplicate.reduce((preValue, current, index, array) => {
    return preValue.concat([current, current]);
  }, []);
};

const getCardgameData = (intialObject, objectToMerge) => {
  return {...intialObject, ...objectToMerge};
};

export const isGameOver = flippedArray => {
  return flippedArray.every(
    (element, index, array) => element.flipped !== false,
  );
};

export const arrayToCardData = shuffledArray => {
  let dataArray = [];
  shuffledArray.map((number, index) => {
    let data = {
      value: number,
      id: index,
      flipped: false,
    };
    dataArray.push(data);
  });

  return dataArray;
};

export const findArrayElementIndex = (array, elementToFind) => {
  if (array == undefined && array.length == 0) return -1;
  let index = array.findIndex(item => item.id == elementToFind.id);
  return index;
};
