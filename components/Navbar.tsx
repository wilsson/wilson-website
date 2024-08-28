import Link from 'next/link';
import {
  IdentificationIcon,
  DocumentIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';

interface Route {
  path: string;
  title: string;
  icon: React.ReactNode;
}

const routes = [
  {
    path: '/',
    title: 'home',
    icon: <HomeIcon className="w-[18px] text-white" />,
  },
  {
    path: '/about',
    title: 'About',
    icon: <IdentificationIcon className="w-[18px] text-white" />,
  },
  {
    path: '/blog',
    title: 'Blog',
    icon: <DocumentIcon className="w-[18px] text-white" />,
  },
];

export const Navbar = () => (
  <div className="mt-6 mx-auto max-w-2xl w-full">
    <div className="flex space-x-7">
      {routes.map(({ path, title, icon }: Route) => (
        <Link key={title} href={`${path}`}>
          <div className="group flex space-x-2 cursor-pointer items-center">
            <div className="shadow-lg group-hover:scale-125 group-hover:shadow-purple-900 transition-all bg-gradient-to-tl from-purple-800 to-indigo-400  p-1 rounded-lg">
              {icon}
            </div>
            <div className="text-gray-300">{title}</div>
          </div>
        </Link>
      ))}
    </div>
    <div className="mx-auto max-w-2xl w-full mt-4">
      <hr className="border border-[#221a29]" />
    </div>
  </div>
);
