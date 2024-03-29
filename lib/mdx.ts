import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

const options = {
  // Use one of Shiki's packaged themes
  theme: 'one-dark-pro',
  // Or your own JSON theme
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

export const mdxToHtml = async (source: string) => {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [ remarkGfm ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          options,
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ],
      ]
    },
  });
  return mdxSource;
};