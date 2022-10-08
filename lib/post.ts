import { sanityClient } from './sanity-server';
import { mdxToHtml } from './mdx';

class Post {

  async getBySlug(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      date,
      content,
      coverImage,
    }`;
    const post = await sanityClient.fetch(query, {
      slug: slug,
    });
    const mdxSource = await mdxToHtml(post.content);
    return {
      post,
      mdxSource,
    };
  }

  async getAllSlugs() {
    const query = `*[_type == "post" && defined(slug.current)][].slug.current`;
    const paths = await sanityClient.fetch(query);
    return paths;
  }

  async getAllPosts() {
    const query = `*[_type == "post"] | order(date desc){
      title,
      date,
      content,
      "slug": slug.current,
    }`;
    const posts = await sanityClient.fetch(query);
    return posts;
  }
}

export default new Post();