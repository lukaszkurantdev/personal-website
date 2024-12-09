/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import prism from "remark-prism";

const nextConfig = { pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"] };

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, prism],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
