import * as React from "react";

export interface MarkdownProps {
  components?: { [key: string]: HTMLElement };
}

declare const Markdown: React.ComponentType<MarkdownProps>;

export { Markdown };
