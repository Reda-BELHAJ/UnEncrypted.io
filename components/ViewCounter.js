import { useEffect } from 'react';
import useSWR from 'swr';

async function fetcher(...args) {
  const res = await fetch(...args);

  return res.json();
}

export default function ViewCounter({ slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      });

    registerView();
  }, [slug]);

  return `${views > 0 ? views.toLocaleString() : '–––'} views`;
}
