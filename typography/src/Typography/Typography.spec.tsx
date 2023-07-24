import React from 'react';
import { render } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Typography label='Foo' />);

    expect(queryAllByText('Foo')).toHaveLength(1);
  });
});
