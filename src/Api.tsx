export const data = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          console.error('Data fetching failed');
          return []; // Return an empty array instead of null
        }
        return response.json();
      })
      .catch(error => {
        console.error('Network Error:', error);
        return []; // Return an empty array in case of a network error
      });
  };
  