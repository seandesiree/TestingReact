
import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import CreatePostForm from './CreatePostForm';

test('creates a new post', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
            { id: 1, userId: 1, title: 'Post 1', body: 'This is the first post' },
            { id: 2, userId: 2, title: 'Post 2', body: 'This is the second post' },
        ]),
    })
);
  const handlePostCreated = jest.fn();
  render(<CreatePostForm onPostCreated={handlePostCreated} />);
  await act(async() => {
  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'New Post' } });
  fireEvent.change(screen.getByPlaceholderText(/Body/i), { target: { value: 'This is a new post.' } });
  fireEvent.click(screen.getByText(/Create Post Button/i));
  })
  
  expect(handlePostCreated).toHaveBeenCalled();
});