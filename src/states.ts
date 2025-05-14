// hooks/usePosts.ts
import { useEffect, useState } from 'react';
import { fetchPosts} from './Api';
import {Post} from './types';


export function usePosts(userId: number) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.filter(post => post.userId === userId));
      } catch (err) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [userId]);

  return { posts, loading, error };
}
