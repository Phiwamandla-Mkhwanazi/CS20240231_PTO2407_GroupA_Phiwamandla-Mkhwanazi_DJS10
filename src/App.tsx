import React from 'react';
import { usePosts } from './states';

const App: React.FC = () => {
  const { posts, loading, error } = usePosts(1);

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center bg-white">
      <h1 className="text-4xl font-bold text-black mb-6">Posts</h1>

      {loading && (
        <p className="text-lg text-gray-700">Loading...</p>
      )}

      {error && (
        <p className="text-xl font-semibold text-red-600 mt-20">{error}</p>
      )}

      {!loading && !error && (
        <div className="w-full max-w-4xl space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-4">
              <h2 className="text-2xl font-semibold text-black mb-2">
                {post.id}. {post.title}
              </h2>
              <p className="text-gray-800">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
