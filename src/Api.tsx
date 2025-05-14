export const data = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        console.error('Data fetching failed');
        return [];
      }
      return await response.json();
    } catch (error) {
      console.error('Network Error:', error);
      return [];
    }
  };
  