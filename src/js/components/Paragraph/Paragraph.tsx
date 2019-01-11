import * as React from 'react';

import { StyledParagraph } from './StyledParagraph';

const Paragraph = ({ color, ...rest }) => (
  <StyledParagraph colorProp={color} {...rest} />
);

let ParagraphDoc;
if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line:no-var-requires
  ParagraphDoc = require('./doc').doc(Paragraph);
}
const ParagraphWrapper = ParagraphDoc || Paragraph;

export { ParagraphWrapper as Paragraph };
