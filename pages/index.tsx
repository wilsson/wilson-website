import { sanityClient } from '../lib/sanity-server';
import { IdentificationIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { Footer } from '../components/Footer';

function HomePage(props) {
  console.log('props', props);
  return(
    <div>
      <main className="px-8">
        <div className="mx-auto max-w-2xl flex justify-between items-start mt-28 flex-col flex-col-reverse sm:flex-row">
          <div className="pr-14">
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
                <div className="text-gray-300">Posts</div>
              </div>
            </div>
          </div>
          <img className="grayscale-[70%] w-28 rounded-full mb-4" src="/avatar.jpeg" />
        </div>

        <div className="mx-auto max-w-2xl mt-10">
          <h3 className="text-2xl text-gray-300">Posts</h3>

          <div className="mt-4">
            <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg cursor-pointer mb-6 transition-all">
              <h2 className="text-gray-300 text-xl">Pattern Backend For Frontend (BFF)</h2>
              <div className="text-gray-400 text-sm">
                November 11, 2021 • 1 min read • 123 views
              </div>
            </div>
            <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg cursor-pointer mb-6 transition-all">
              <h2 className="text-gray-300 text-xl">PostgreSQL + pgAdmin con Docker</h2>
              <div className="text-gray-400 text-sm">
                November 08, 2022 • 2 min read • 200 views
              </div>
            </div>
            <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg cursor-pointer mb-6 transition-all">
              <h3 className="text-gray-300 text-xl">Dive, herramienta para explorar imagenes docker</h3>
              <div className="text-gray-400 text-sm">
                November 14, 2022 • 5 min read • 58 views
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default HomePage

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);
  return {
    props: {
      posts,
    } 
  };
}