import React, { useEffect, useState } from 'react';

  const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, []);

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const deletePost = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setPosts(posts.filter(post => post.id !== postId));
    });
  };

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  export default PostList;