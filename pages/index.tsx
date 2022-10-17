import { IdentificationIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { Footer } from '~/components/Footer';
import PostInstace from '~/lib/post';
import Link from 'next/link';
import { PostPreview } from '~/components/PostPreview';
import { NextSeo } from 'next-seo';

function HomePage({ posts }) {
  return(
    <>
      <NextSeo description="In this place I will share everything I have learned in my technology career." />
      <div>
        <main className="px-8">
          <div className="mx-auto max-w-2xl flex justify-between items-start mt-28 flex-col flex-col-reverse sm:flex-row">
            <div className="sm:pr-14">
              <h1 className="text-white text-4xl font-[800] mb-2">Wilson Flores</h1>
              <h2 className="text-gray-300 mb-4">Sotfware Engineer FullStack at <a href="https://www.pedidosya.com" className="text-red-200 underline font-medium">PedidosYa</a></h2>
              <p className="text-gray-400 mb-8">In this place I will share everything I have learned in my technology career.</p>
              <div className="flex space-x-7">
                <Link href="/about">
                  <div className="group flex space-x-2 cursor-pointer">
                    <div className="shadow-lg group-hover:scale-125 group-hover:shadow-purple-900 transition-all bg-gradient-to-tl from-purple-800 to-indigo-400  p-1 rounded-lg">
                      <IdentificationIcon className="w-[18px] text-white" />
                    </div>
                    <div className="text-gray-300">About</div>
                  </div>
                </Link>
                <Link href="/blog">
                  <div className="group flex space-x-2 cursor-pointer">
                    <div className="shadow-lg group-hover:scale-125 group-hover:shadow-purple-900 transition-all bg-gradient-to-tl from-purple-800 to-indigo-400 p-1 rounded-lg">
                      <DocumentIcon className="w-[18px] text-white" />
                    </div>
                    <div className="text-gray-300">Blog</div>
                  </div>
                </Link>
              </div>
            </div>
            <img className="grayscale-[70%] w-28 rounded-full mb-6" src="/avatar.jpeg" />
          </div>

          <div className="mx-auto max-w-2xl mt-10">
            <h3 className="text-2xl text-gray-300">All Posts</h3>
            <div className="mt-4">
              {posts.map((props, key) => (
                <PostPreview {...props} key={key}/>
              ))}
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default HomePage

export async function getStaticProps() {
  const posts = await PostInstace.getAllPosts();
  return {
    props: {
      posts,
    } 
  };
}