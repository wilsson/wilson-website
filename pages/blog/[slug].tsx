import { motion } from 'framer-motion';
import { useState } from 'react';
import { parseISO, format } from 'date-fns';
import readingTime from 'reading-time';
import PostInstance from '~/lib/post';
import { MDXRemote } from 'next-mdx-remote';
import { LikeIcon } from '~/components/LikeIcon';
import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';
import { urlFor } from '~/lib/sanity'

const Post = ({ post, mdxSource }) => {
  const [ like, setLike ] = useState(false);
  return(
    <main className="px-8">
      <Navbar />      
      <article className="mx-auto max-w-2xl w-full">
        <h1 className="text-white text-4xl font-[800] mb-2 mt-10">{post.title}</h1>
        <div className="mb-4 flex justify-between flex-col sm:flex-row">
          <p className="text-gray-400 text-sm mb-1">
            {format(parseISO(post.date), 'MMMM dd, yyyy')} • {readingTime(post.content).text} 
          </p>
          <div className="flex space-x-2 items-center">
            <p className="text-gray-400 text-sm">58 views • 10 Likes</p>
            <div className={`cursor-pointer hover:scale-125 transition-all bg-white/10 p-1 rounded-lg flex ${like ? 'bg-gradient-to-tl from-purple-800 to-indigo-400': ''}`}>
              <button onClick={() => setLike(!like)} className="relative focus:outline-none">
                <motion.div
                  className="absolute w-full"
                  animate={like ? 'show' : 'hide'}
                  variants={{
                    hide: {
                      translateY: -40,
                      opacity: 0
                    },
                    show: {
                      translateY: [0, -40],
                      opacity: [0, 1, 0]
                    }
                  }}
                  initial={false}
                >
                  <p className="text-white">👍</p>
                </motion.div>
                <LikeIcon className={`w-[18px] h-[18px] ${like ? 'text-white': 'text-gray-400'}`} />
              </button>
            </div>
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <img src={urlFor(post.coverImage).url()} alt="" />
          <MDXRemote {...mdxSource} />
        </div>
      </article>
      <Footer />
    </main>
  )
};

export default Post;

export async function getStaticPaths() {
  const paths = await PostInstance.getAllSlugs();
  return {
    paths: paths.map((slug: string) => ({ params: { slug }})),
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { post, mdxSource } = await PostInstance.getBySlug(params.slug);
  return {
    props: {
      post,
      mdxSource
    } 
  };
}