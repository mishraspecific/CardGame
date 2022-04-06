import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import Header from '../../src/components/Header';

describe('Header', () => {
  test('check onPress', async () => {
    const onPress = jest.fn();

    const component = <Header counter={'1'} onPress={onPress} />;

    const {findByText} = render(component);

    const restart = await findByText('Restart Game');

    fireEvent.press(restart);
    expect(onPress).toHaveBeenCalled();
  });
});
