import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { deepMerge } from '../../utils';

import { Anchor } from '../Anchor';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

interface IComponents {
  [key: string]: HTMLElement;
}

interface IGrommetMarkdown {
  components: IComponents;
  options: any;
  theme: any;
}

class GrommetMarkdown extends React.Component<IGrommetMarkdown> {
  public render() {
    const { components, options, theme, ...rest } = this.props;

    const heading = [1, 2, 3, 4].reduce((obj, level) => {
      const result = { ...obj };
      result[`h${level}`] = {
        component: Heading,
        props: { level },
      };
      return result;
    }, {});

    const overrides = deepMerge(
      {
        a: { component: Anchor },
        p: { component: Paragraph },
      },
      heading,
      components,
      options && options.overrides,
    );

    return <Markdown options={{ overrides }} {...rest} />;
  }
}

let GrommetMarkdownDoc;
if (process.env.NODE_ENV !== 'production') {
  // tslint:disable-next-line:no-var-requires
  GrommetMarkdownDoc = require('./doc').doc(GrommetMarkdown);
}
const GrommetMarkdownWrapper = GrommetMarkdownDoc || GrommetMarkdown;

export { GrommetMarkdownWrapper as Markdown };
