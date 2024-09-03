import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { parseISO, format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote';
import readingTime from 'reading-time';
import { NextSeo as NextSeoNext } from 'next-seo';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { LikeIcon } from '~/components/LikeIcon';
import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/Footer';
import { useLikes } from '~/lib/useLikes';
import { useViews } from '~/lib/useViews';
import PostInstance from '~/lib/post';

const NextSeo = NextSeoNext as any;
const optionsAnimateLike = {
  hide: {
    translateY: -40,
    opacity: 0,
  },
  show: {
    translateY: [0, -40],
    opacity: [0, 1, 0],
  },
};

const Post = ({ post, mdxSource }) => {
  const {
    data: dataLikes,
    incrementLikes,
    isError: likesIsError,
    isLoading: likesIsLoading,
  } = useLikes({ slug: post.slug });

  const {
    data: dataViews,
    incrementViews,
    isError: viewsIsError,
    isLoading: viewsIsLoading,
  } = useViews({ slug: post.slug });

  const handleLike = () => {
    incrementLikes();
  };

  useEffect(() => {
    incrementViews();
  }, []);

  return (
    <>
      <NextSeo
        title={post.title}
        canonical={`https://wilsonft83.dev/blog/${post.slug}`}
        openGraph={{
          title: post.title,
          images: [
            {
              url: post.cover,
              alt: post.title,
            },
          ],
        }}
      />
      <main className="px-8">
        <Navbar />
        <article className="mx-auto max-w-2xl w-full">
          <h1 className="text-white text-4xl font-[800] mb-2 mt-10">
            {post.title}
          </h1>
          <div className="mb-4 flex justify-between flex-col sm:flex-row">
            <p className="text-gray-400 text-sm mb-1">
              {format(parseISO(post.date), 'MMMM dd, yyyy')} •{' '}
              {readingTime(post.content).text}
            </p>
            <div className="flex space-x-2 items-center">
              <p className="text-gray-400 text-sm">
                {viewsIsLoading || viewsIsError ? (
                  <EllipsisHorizontalIcon className="w-[18px] animate-pulse inline-block" />
                ) : (
                  dataViews.views
                )}{' '}
                views
                {' • '}
                {likesIsLoading || likesIsError ? (
                  <EllipsisHorizontalIcon className="w-[18px] animate-pulse inline-block" />
                ) : (
                  dataLikes.likes
                )}{' '}
                likes
              </p>
              <div
                className={`cursor-pointer transition-all bg-white/10 p-1 rounded-lg flex ${
                  dataLikes?.userLike
                    ? 'bg-gradient-to-tl from-purple-800 to-indigo-400'
                    : ''
                }`}
              >
                <button
                  onClick={handleLike}
                  className="relative focus:outline-none"
                >
                  <motion.div
                    className="absolute w-full"
                    animate={dataLikes?.userLike ? 'show' : 'hide'}
                    variants={optionsAnimateLike}
                    initial={false}
                  >
                    <p className="text-white">👍</p>
                  </motion.div>
                  <LikeIcon
                    className={`w-[18px] h-[18px] ${
                      dataLikes?.userLike ? 'text-white' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            <img src={post.cover} alt={post.title} />
            <MDXRemote {...mdxSource} />
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = [];
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const result = await PostInstance.getBySlug(params.slug);
  return {
    props: {
      post: {
        ...result.frontmatter,
        content: result.rawContent,
        slug: params.slug,
      },
      mdxSource: result.content,
    },
    revalidate: 60,
  };
}
