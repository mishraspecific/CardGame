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

const Home = () => {
  const CARD_PAIRS_VALUE = getCardPairValues();

  const [cardNumbers, setCardNumbers] = useState([]);
  const [counter, setCounter] = useState(0);
  var prevCardStack = useRef([]).current;

  let timer = useRef(null).current;

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const isCardMatched = (previousValue, value) => {
    return previousValue === value;
  };

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

  const restartGame = () => {
    setCardNumbers(arrayToCardData(CARD_PAIRS_VALUE));
    setCounter(0);
    prevCardStack = [];
  };

  const checkIfGameOver = () => {
    if (isGameOver(cardNumbers)) {
      showGameOverAlert();
    }
  };

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

  const renderItem = item => {
    return <GameCard item={item} onCardTouch={onCardTouch} />;
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header counter={counter} onPress={restartGame} />
      <FlatList
        keyExtractor={item => item.id}
        extraData={cardNumbers}
        data={cardNumbers}
        renderItem={renderItem}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default Home;
