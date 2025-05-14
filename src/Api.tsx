export const data = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      console.error('Data fetching failed');
      return null;
    }
    return response.json();
  })
  .catch(error => console.error('Network Error:', error));
