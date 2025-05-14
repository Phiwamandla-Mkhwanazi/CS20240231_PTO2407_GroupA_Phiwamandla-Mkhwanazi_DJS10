// Define a Post interface to describe the shape of each post
export interface Post {
  // The ID of the user who created the post
  userId: number;
  
  // A unique identifier for the post
  id: number;
  
  // The title of the post
  title: string;
  
  // The body/content of the post
  body: string;
}
