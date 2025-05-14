// Import the Post type to define the structure of the fetched posts
import { Post } from './types';

/**
 * Fetches a list of posts from the JSONPlaceholder API.
 * 
 * @returns {Promise<Post[]>} - A promise that resolves with an array of Post objects.
 * @throws {Error} - Throws an error if the fetch request fails or the response is not OK.
 */
export async function fetchPosts(): Promise<Post[]> {
  // Sending a GET request to fetch posts from the API
  const response = await fetch('https:s//jsonplaceholder.typicode.com/posts');

  // Check if the response was successful (status 200-299)
  if (!response.ok) {
    // Throw an error if the response is not OK, including the status code
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // Parse the response body as JSON and cast it to the Post type
  const data: Post[] = await response.json();

  // Return the parsed data (array of Post objects)
  return data;
}
