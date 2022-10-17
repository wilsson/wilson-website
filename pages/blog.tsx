import Link from 'next/link';
import readingTime from 'reading-time';
import { parseISO, format } from 'date-fns';
import { Footer } from '~/components/Footer';
import PostInstace from '~/lib/post';
import { Navbar } from '~/components/Navbar';
import { PostPreview } from '~/components/PostPreview'

function BlogPage({ posts }) {
  return(
    <div>
      <main className="px-8">
        <Navbar />
        <div className="mx-auto max-w-2xl mt-10">
          <h1 className="text-white text-4xl font-extrabold mb-8">Blog</h1>
          <div className="mt-4">
            {posts.map((props, key) => (
              <PostPreview {...props} key={key}/>
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