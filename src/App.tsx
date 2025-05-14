import React, { useEffect, useState } from 'react';
import { fetchPosts } from './Api';

// Define a Post interface to describe the shape of each post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error &&
        posts
          .filter(post => post.userId === 1)
          .map(post => (
            <div key={post.id} style={{ marginBottom: '1.5rem' }}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
      }
    </div>
  );
};

export default App;
