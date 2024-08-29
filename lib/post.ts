import fs from 'fs';
import path from 'path';
import { mdxToHtml } from './mdx';

const contentDir = path.join(process.cwd(), 'public/posts');

class Post {
  async getBySlug(slug: string) {
    console.log('-----getBySlug-----');
    console.log(
      'nodeModules shiki>',
      fs.readFileSync(
        path.join(process.cwd(), 'node_modules/shiki/package.json'),
        'utf-8'
      )
    );
    console.log(
      'nodeModules themes>',
      fs.readdirSync(path.join(process.cwd(), 'node_modules/shiki/themes'))
    );
    const fileName = slug + '.mdx';
    const filePath = path.join(contentDir, fileName);
    console.log('filePath', filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log('read fileContent');
    const contentSerialize = await mdxToHtml(fileContent);
    console.log('contentSerialize');
    return {
      frontmatter: contentSerialize.frontmatter,
      content: contentSerialize,
      slug: path.parse(fileName).name,
      rawContent: fileContent,
    };
  }

  async getAllPosts() {
    console.log('-----getAllPosts-----');
    const files = fs.readdirSync(contentDir);
    console.log('files', files);
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
