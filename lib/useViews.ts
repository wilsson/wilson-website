import useSWR from 'swr';
import { fetcher } from './fetcher';

const API_URL = '/api/views';

export const useViews = ({ slug }) => {
  const { data, error, mutate } = useSWR(`${API_URL}/${slug}`, fetcher, {
    errorRetryCount: 3,
  });

  const updateViews = async (slug: string) => (
    fetcher(`${API_URL}/${slug}`, {
      method: 'POST',
    })
  );

  const incrementViews = () => {
    mutate(updateViews(slug));
  };

  return {
    isLoading: !error && !data,
    isError: error,
    incrementViews,
    data,
  }
};