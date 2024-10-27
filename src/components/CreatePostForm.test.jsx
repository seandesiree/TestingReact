
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreatePostForm from './CreatePostForm';

test('creates a new post', async () => {
  const handlePostCreated = jest.fn();
  render(<CreatePostForm onPostCreated={handlePostCreated} />);
  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'New Post' } });
  fireEvent.change(screen.getByPlaceholderText(/Body/i), { target: { value: 'This is a new post.' } });
  fireEvent.click(screen.getByText(/Create/i));
  expect(handlePostCreated).toHaveBeenCalled();
});