export const fetcher = async (url: string, options: RequestInit = { method: 'GET' }) => {
  const res = await fetch(url, {
    ...options,
  });

  if(!res.ok) {
    const error = new Error('An error occurred');
    throw error;
  }

  return res.json();
};