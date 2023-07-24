import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Button label='Foo' />);

    expect(queryAllByText('Foo')).toHaveLength(1);
  });
});
