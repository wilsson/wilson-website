import { Footer } from '~/components/Footer';
import PostInstace from '~/lib/post';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import readingTime from 'reading-time';
import { Navbar } from '~/components/Navbar'

function BlogPage({ posts }) {
  return(
    <div>
      <main className="px-8">
        <Navbar />
        <div className="mx-auto max-w-2xl mt-10">
          <h1 className="text-white text-4xl font-extrabold mb-8">Blog</h1>
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

export default BlogPage

export async function getStaticProps() {
  const posts = await PostInstace.getAllPosts();
  return {
    props: {
      posts,
    } 
  };
}