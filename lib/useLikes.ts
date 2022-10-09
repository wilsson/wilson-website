import useSWR from 'swr';
import { fetcher} from './fetcher';

const API_URL = '/api/likes';

export const useLikes = ({ slug }) => {
  const { data, error, mutate } = useSWR(`${API_URL}/${slug}`, fetcher, {
    errorRetryCount: 3,
  });

  const updateLikes = async (slug: string) => (
    fetcher(`${API_URL}/${slug}`, {
      method: 'POST',
    })
  );

  const incrementLikes = () => {
    if(!data?.userLike) {
      mutate(updateLikes(slug));
    }
  };

  return {
    isLoading: !error && !data,
    isError: error,
    incrementLikes,
    data,
  }
};