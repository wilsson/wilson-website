import fs from 'fs';
import path from 'path';
import { mdxToHtml } from './mdx';

const contentDir = path.join(process.cwd(), 'posts');

class Post {
  async getBySlug(slug: string) {
    const fileName = slug + '.mdx';
    const filePath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const contentSerialize = await mdxToHtml(fileContent);
    return {
      frontmatter: contentSerialize.frontmatter,
      content: contentSerialize,
      slug: path.parse(fileName).name,
      rawContent: fileContent,
    };
  }

  async getAllPosts() {
    const files = fs.readdirSync(contentDir);
    const posts = await Promise.all(
      files.map(async (file) => await this.getBySlug(path.parse(file).name))
    );
    return posts.sort(
      (a: any, b: any) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  }
}

export default new Post();
