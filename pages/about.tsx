import { RocketLaunchIcon } from '@heroicons/react/20/solid';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';

const experiences = [
  {
    title: 'Software Engineer FullStack',
    company: 'PedidosYa',
    time: 'February 2022, Present'
  },
  {
    title: 'Software Architect',
    company: 'PagoEfectivo',
    time: 'November 2019, February 2022'
  },
  {
    title: 'Frontend Developer',
    company: 'El Grupo el Comercio',
    time: 'November 2015, October 2019'
  },
  {
    title: 'Frontend Developer',
    company: 'Clicks and Bricks',
    time: 'Jaunary 2015, October 2015'
  }
];

function AboutPage() {
  return(
    <div>
      <main className="px-8">
        <Navbar />
        <div className="mx-auto max-w-2xl mt-10">
          <div className="prose dark:prose-invert max-w-none">
            <h1>About</h1>
            <p>
              👋 Hello, my name is Wilson Flores and I am a Sotfware Engineer FullStack at
              {" "}<a href="https://www.pedidosya.com" className="text-red-200">PedidosYa</a> (delivery food + Q-commerce), where I'm dedicated to create good experiences so that the user can find their dish with the help of frontend and backend technologies.
            </p>

            <h3>Networks</h3>
            <ul>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/wilsonft">@wilsonft</a></li>
              <li>Twitter: <a href="https://twitter.com/wilsson83">@wilsson83</a></li>
              <li>Github: <a href="https://github.com/wilsson">@wilsson</a></li>
              <li>Website: <a href="https://www.wilsonft83.dev">https://www.wilsonft83.dev</a></li>
            </ul>

            <h3>Experiences</h3>
            <ul className="relative border-l border-gray-800 list-none">                  
              {experiences.map(({ title, company, time }) => (
                <li className="mb-10 ml-6" key={time}>            
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white ring-gray-900 bg-blue-900">
                    <RocketLaunchIcon className="w-[18px] h-[18px]"/>
                  </span>
                  <p className="mb-1">
                    {title} - {company}
                  </p>
                  <time className="block mb-2 text-sm leading-none text-gray-500">{time}</time>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default AboutPage