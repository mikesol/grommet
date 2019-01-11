import 'jest-styled-components';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { Paragraph } from '..';
import { Grommet } from '../../Grommet';

test('Paragraph renders', () => {
  const component = renderer.create(
    <Grommet>
      <Paragraph />
    </Grommet>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph size renders', () => {
  const component = renderer.create(
    <Grommet>
      <Paragraph size='small' />
      <Paragraph size='medium' />
      <Paragraph size='large' />
      <Paragraph size='xlarge' />
      <Paragraph size='xxlarge' />
    </Grommet>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph margin renders', () => {
  const component = renderer.create(
    <Grommet>
      <Paragraph margin='small' />
      <Paragraph margin='medium' />
      <Paragraph margin='large' />
      <Paragraph margin='none' />
      <Paragraph margin={{ bottom: 'small' }} />
      <Paragraph margin={{ top: 'small' }} />
    </Grommet>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph textAlign renders', () => {
  const component = renderer.create(
    <Grommet>
      <Paragraph textAlign='start' />
      <Paragraph textAlign='center' />
      <Paragraph textAlign='end' />
    </Grommet>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
