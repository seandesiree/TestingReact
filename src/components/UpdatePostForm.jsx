import React, { useState } from 'react';

  const UpdatePostForm = ({ post, onPostUpdated }) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleUpdate = (event) => {
      event.preventDefault();
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      })
        .then(response => response.json())
        .then(data => onPostUpdated(data));
    };

    return (
      <form onSubmit={handleUpdate}>
        <h3>Update Post</h3>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Update Post Button</button>
      </form>
    );
  };

  export default UpdatePostForm;