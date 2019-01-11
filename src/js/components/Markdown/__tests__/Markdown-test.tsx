import 'jest-styled-components';
import * as React from 'react';
import renderer from 'react-test-renderer';

import { Markdown } from '..';
import { Grommet } from '../../Grommet';

const CONTENT = `
# H1

Paragraph

## H2

### H3

#### H4

[a link](#)
`;

test('Markdown renders', () => {
  const component = renderer.create(
    <Grommet>
      <Markdown>{CONTENT}</Markdown>
    </Grommet>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
