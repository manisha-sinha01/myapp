import React from 'react';
import DataDisplay from '../src/components/FilteredData/DataDisplay';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<DataDisplay />).toJSON();
  expect(rendered).toBeTruthy();
});
