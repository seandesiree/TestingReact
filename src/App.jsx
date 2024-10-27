
import React, { useState } from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import UpdatePostForm from './components/UpdatePostForm';

function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostCreated = (newPost) => {
    // Add the new post to the posts list
  };

  const handlePostUpdated = (updatedPost) => {
    // Update the particular post in the list
  };

  return (
    <div className="App">
      <CreatePostForm onPostCreated={handlePostCreated} />
      <PostList />
      {selectedPost && (
        <UpdatePostForm post={selectedPost} onPostUpdated={handlePostUpdated} />
      )}
    </div>
  );
}

export default App;