import React from 'react';
import { usePosts } from './states';

const App: React.FC = () => {
  const { posts, loading, error } = usePosts(1);

  return (
    <div>
      <h1>Posts</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error &&
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h2 className="bg-blue-500 text-white p-4 rounded-lg">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  );
};

export default App;
