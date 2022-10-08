import { IdentificationIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { Footer } from '~/components/Footer';
import PostInstace from '~/lib/post';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import readingTime from 'reading-time';

function HomePage({ posts }) {
  return(
    <div>
      <main className="px-8">
        <div className="mx-auto max-w-2xl flex justify-between items-start mt-28 flex-col flex-col-reverse sm:flex-row">
          <div className="sm:pr-14">
            <h1 className="text-white text-4xl font-[800] mb-2">Wilson Flores</h1>
            <h2 className="text-gray-300 mb-4">Sotfware Engineer FullStack at <a className="hover:underline hover:decoration-red-200 hover:text-red-200" href="https://www.pedidosya.com/">PedidosYa</a></h2>
            <p className="text-gray-400 mb-8">In this place I will share everything I have learned in my technology career.</p>
            <div className="flex space-x-7">
              <div className="group flex space-x-2 cursor-pointer">
                <div className="shadow-lg group-hover:scale-125 group-hover:shadow-purple-900 transition-all bg-gradient-to-tl from-purple-800 to-indigo-400  p-1 rounded-lg">
                  <IdentificationIcon className="w-[18px] text-white" />
                </div>
                <div className="text-gray-300">About</div>
              </div>
              <div className="group flex space-x-2 cursor-pointer">
                <div className="shadow-lg group-hover:scale-125 group-hover:shadow-purple-900 transition-all bg-gradient-to-tl from-purple-800 to-indigo-400 p-1 rounded-lg">
                  <DocumentIcon className="w-[18px] text-white" />
                </div>
                <div className="text-gray-300">Blog</div>
              </div>
            </div>
          </div>
          <img className="grayscale-[70%] w-28 rounded-full mb-6" src="/avatar.jpeg" />
        </div>

        <div className="mx-auto max-w-2xl mt-10">
          <h3 className="text-2xl text-gray-300">All Posts</h3>
          <div className="mt-4">
            {posts.map(({ title, date, slug, content}) => (
              <Link href={`/blog/${slug}`} key={slug}>
                <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg cursor-pointer mb-6 transition-all">
                  <h2 className="text-gray-300 text-xl">{title}</h2>
                  <div className="text-gray-400 text-sm">
                    {format(parseISO(date), 'MMMM dd, yyyy')}  • {readingTime(content).text} • 123 views
                  </div>
                </div> 
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
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