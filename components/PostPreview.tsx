import Link from 'next/link';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { parseISO, format } from 'date-fns';
import readingTime from 'reading-time';
import { useViews } from '~/lib/useViews';

export const PostPreview = ({ frontmatter, slug, rawContent }) => {
  const { data, isLoading, isError } = useViews({ slug });
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white/5 hover:bg-white/10 p-4 rounded-lg cursor-pointer mb-6 transition-all">
        <h2 className="text-gray-300 text-xl">{frontmatter.title}</h2>
        <div className="text-gray-400 text-sm">
          {format(parseISO(frontmatter.date), 'MMMM dd, yyyy')} •{' '}
          {readingTime(rawContent).text} •{' '}
          {isLoading || isError ? (
            <EllipsisHorizontalIcon className="w-[18px] animate-pulse inline-block" />
          ) : (
            <>{data?.views} views</>
          )}
        </div>
      </div>
    </Link>
  );
};
