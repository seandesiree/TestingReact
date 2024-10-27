import React, { useState } from 'react';

  const CreatePostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      })
        .then(response => response.json())
        .then(data => {
          onPostCreated(data);
          setTitle('');
          setBody('');
        });
    };

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create Post</h3>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Body"
          required
        ></textarea>
        <button type="submit">Create</button>
      </form>
    );
  };

  export default CreatePostForm;