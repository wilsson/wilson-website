import Image from 'next/future/image';
import { urlFor } from '../lib/sanity';
import { sanityClient } from '../lib/sanity-server';

function HomePage(props) {
  console.log('props', props);
  return(
    <div>
      <h1>Welcome to Next.js + Sanity.io + Tailwindcss!</h1>
      <hr />
      <ul>
        {props.posts.map(({ title, coverImage }) => {
          return(
            <li key={title}>
              <h2>{title}</h2>
              <Image
                src={urlFor(coverImage).url()}
                width="128"
                height="72"
                alt="github"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomePage

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);
  return {
    props: {
      posts
    } 
  };
}