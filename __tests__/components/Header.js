import * as React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';

import Header from '../../src/components/Header';

describe('Header', () => {
  test('check pnPress', async () => {
    const onPress = jest.fn();

    const component = <Header counter={'1'} onPress={onPress} />;

    const {findByText} = render(component);

    const restart = await findByText('Restart Game');

    fireEvent.press(restart);
    expect(onPress).toHaveBeenCalled();
  });
});
