import type { MDXComponents } from "mdx/types";
import { Typography } from "./components/Typography/Typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    p: ({ children }) => <Typography>{children}</Typography>,
    hr: () => <hr style={{ color: "#3c4249", borderTop: 0 }} />,
  };
}
