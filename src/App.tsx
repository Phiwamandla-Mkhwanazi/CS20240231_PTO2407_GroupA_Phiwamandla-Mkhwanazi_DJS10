import React from 'react';
import { usePosts } from './states';

const App: React.FC = () => {
  const { posts, loading, error } = usePosts(1);

  return (
    <div className="min-h-screen px-4 py-2 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-black m-2">Posts</h1>

      {loading && (
        <p className="text-lg text-black">Loading...</p>
      )}

      {error && (
        <p className="text-xl text-black font-semibold mt-20">{error}</p>
      )}

      {!loading && !error && (
        <div className="w-full max-w-4xl mx-auto">
          {posts.map(post => (
            <div key={post.id} className="mb-10">
              <h2 className="text-2xl font-semibold text-black mb-2">
                {post.title}
              </h2>
              <p className="text-black">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
