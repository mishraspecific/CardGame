import * as React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';

import Home from '../../src/screens/Home';

describe('Testing Home Screen', () => {
  test('page rendered correctly', async () => {
    const component = <Home />;

    const {findByText, findAllByText} = render(component);

    const header = await findByText('Restart Game');
    const headerStepTest = await findByText('STEPS :');

    const items = await findAllByText('?');

    expect(header).toBeTruthy();
    expect(headerStepTest).toBeTruthy();

    expect(items.length).toBe(12);
  });
});
