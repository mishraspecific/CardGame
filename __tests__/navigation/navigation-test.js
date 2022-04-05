import * as React from 'react';
import {render} from '@testing-library/react-native';

import Router from '../../src/navigation';

describe('Testing react navigation', () => {
  test('page contains the header and 12 cards', async () => {
    const component = <Router />;

    const {findByText, findAllByText} = render(component);

    const header = findByText('Restart Game');
    const headerStepTest = findByText('STEPS :');

    const items = await findAllByText('?');

    expect(header).toBeTruthy();
    expect(headerStepTest).toBeTruthy();

    expect(items.length).toBe(12);
  });
});
