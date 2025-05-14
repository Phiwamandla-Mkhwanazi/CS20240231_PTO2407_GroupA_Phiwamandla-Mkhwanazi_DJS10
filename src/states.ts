// hooks/usePosts.ts
import { useEffect, useState } from 'react';
import { fetchPosts } from './Api';  // Import the function that fetches posts from the API
import { Post } from './types';      // Import the Post type to ensure type safety

/**
 * Custom hook to fetch posts for a specific user and manage loading and error states.
 * 
 * @param {number} userId - The user ID to filter posts by.
 * @returns {Object} - Returns an object with the fetched posts, loading state, and error message.
 */
export function usePosts(userId: number) {
  // State to store posts fetched from the API
  const [posts, setPosts] = useState<Post[]>([]);
  
  // State to track the loading state (whether data is still being fetched)
  const [loading, setLoading] = useState(true);
  
  // State to store any error messages in case the fetch fails
  const [error, setError] = useState<string | null>(null);

  // useEffect to fetch posts when the component mounts or userId changes
  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Fetch posts from the API
        const data = await fetchPosts();
        
        // Filter posts based on the provided userId and set to state
        setPosts(data.filter(post => post.userId === userId));
      } catch (err) {
        // In case of an error, set the error state
        setError('Data Fetching Failed');
      } finally {
        // Once the request is complete, set loading to false
        setLoading(false);
      }
    };

    // Call the function to load posts
    loadPosts();
  }, [userId]); // Dependency array, re-run this effect whenever userId changes

  // Return the posts, loading state, and error state
  return { posts, loading, error };
}
