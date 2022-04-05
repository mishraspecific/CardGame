import {
  isGameOver,
  arrayToCardData,
  findArrayElementIndex,
  getCardPairValues,
} from '../../src/util/CardHelper';

test('check every element in array are in pair', () => {
  expect(new Set(getCardPairValues(4)).size).toBe(2);
});

test('check returned array lenth same as param', () => {
  expect(getCardPairValues(4).length).toBe(4);
});

test('check number array converted to correct card data', () => {
  expect(arrayToCardData(numbersArray)).toEqual(intitialArray);
});

test('check if all cards are flipped and game over', () => {
  expect(isGameOver(finalDataArray)).toBeTruthy();
});

test('check if all cards are not flipped and game not over', () => {
  expect(isGameOver(intitialArray)).not.toBeTruthy();
});

test('find index of given element in a array', () => {
  expect(findArrayElementIndex(intitialArray, intitialArray[2])).toBe(2);
});

const numbersArray = [10, 15, 10, 15];
const intitialArray = [
  {
    id: 0,
    value: 10,
    flipped: false,
  },
  {
    id: 1,
    value: 15,
    flipped: false,
  },
  {
    id: 2,
    value: 10,
    flipped: false,
  },
  {
    id: 3,
    value: 15,
    flipped: false,
  },
];

const finalDataArray = [
  {
    id: 1,
    value: 10,
    flipped: true,
  },
  {
    id: 2,
    value: 15,
    flipped: true,
  },
];
