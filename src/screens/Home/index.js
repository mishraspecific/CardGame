import React, {useCallback, useEffect, useState, useRef} from 'react';
import {SafeAreaView, FlatList, Alert} from 'react-native';
import GameCard from '../../components/GameCard';
import Header from '../../components/Header';
import en from '../../localization/langauges/en';
import {
  getCardPairValues,
  arrayToCardData,
  isGameOver,
  findArrayElementIndex,
} from '../../util/CardHelper';

import commonStyles from '../../themes/styles';
import Congratulation from '../../components/Congratulation.js';

const Home = () => {
  const CARD_PAIRS_VALUE = getCardPairValues();

  const [cardNumbers, setCardNumbers] = useState([]);
  const [counter, setCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  var prevCardStack = useRef([]).current;
  //let gameOver = useRef(false).current;

  let timer = useRef(null).current;

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const showGameOverAlert = () => {
    Alert.alert(
      en.game_win_alert_title,
      `${en.game_win_alert_msg} ${counter} ${en.move}`,
      [
        {
          text: en.play_again,
          onPress: () => restartGame(),
        },
      ],
      {cancelable: false},
    );
  };

  /**
   * This callback will be triggered on restart game and
   * it will reset all values to intial state
   */
  const restartGame = () => {
    setCardNumbers(arrayToCardData(CARD_PAIRS_VALUE));
    setCounter(0);
    prevCardStack = [];
    setGameOver(false);
  };

  /**
   * This is use to check if game is over
   */
  const checkIfGameOver = () => {
    if (isGameOver(cardNumbers)) {
      setGameOver(true);
      showGameOverAlert();
    }
  };

  const isCardMatched = (previousValue, value) => {
    return previousValue === value;
  };

  /**
   * This  get triggred on card touch and it decided game next state
   * (1) Card is mathed from previous card and shoud not flipp
   * (2) card not matched and it should flip back
   * @param {*} index
   */
  const decideGameNextState = index => {
    let cardItem = cardNumbers[index];

    let previousValue =
      prevCardStack.length > 0 ? prevCardStack.pop() : undefined;

    if (previousValue == undefined) {
      prevCardStack.push(cardItem);
      cardItem.flipped = true;
    } else if (isCardMatched(previousValue.value, cardItem.value)) {
      cardItem.flipped = true;
      checkIfGameOver();
    } else {
      let prevCardIndex = findArrayElementIndex(cardNumbers, previousValue);
      let prevCardItem = cardNumbers[prevCardIndex];
      prevCardItem.flipped = false;
      cardItem.flipped = false;
    }
    setCardNumbers(cardNumbers);
    forceUpdate();
  };

  const incrementGameMoveCounter = () => {
    setCounter(counter + 1);
  };

  const onCardTouch = useCallback(({index}) => {
    incrementGameMoveCounter();

    var cardItemToFlip = cardNumbers[index];
    cardItemToFlip.flipped = true;
    setCardNumbers(cardNumbers);

    timer = setTimeout(() => {
      decideGameNextState(index);
    }, 1000);
  });

  useEffect(() => {
    setCardNumbers(arrayToCardData(CARD_PAIRS_VALUE));

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderCard = item => {
    return <GameCard item={item} onCardTouch={onCardTouch} />;
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header counter={counter} onPress={restartGame} />
      <FlatList
        keyExtractor={item => item.id}
        extraData={cardNumbers}
        data={cardNumbers}
        renderItem={renderCard}
        numColumns={3}
      />
      {gameOver && <Congratulation isGameOver={gameOver} />}
    </SafeAreaView>
  );
};

export default Home;
