import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode, {
  Options as RehypeCodeOptions,
} from 'rehype-pretty-code';
import * as shiki from 'shiki';
import path from 'path';

const getShikiPath = (): string => {
  return path.join(process.cwd(), 'public/shiki');
};

const getHighlighter: RehypeCodeOptions['getHighlighter'] = async (options) => {
  const highlighter = await shiki.getHighlighter({
    ...(options as any),
    paths: {
      languages: `${getShikiPath()}/languages/`,
      themes: `${getShikiPath()}/themes/`,
    },
  });
  return highlighter;
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',

  // Or your own JSON theme
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
  ...(process.env.NODE_ENV === 'production' && { getHighlighter }),
};

export const mdxToHtml = async (source: string) => {
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, options],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    },
  } as any);
  return mdxSource;
};
