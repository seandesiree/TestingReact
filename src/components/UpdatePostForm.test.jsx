
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UpdatePostForm from './UpdatePostForm';

test('updates a post', async () => {
  const post = { id: 1, title: 'Old Title', body: 'Old Body' };
  const handlePostUpdated = jest.fn();
  render(<UpdatePostForm post={post} onPostUpdated={handlePostUpdated} />);
  
  fireEvent.change(screen.getByDisplayValue(/Old Title/i), { target: { value: 'Updated Title' } });
  fireEvent.change(screen.getByDisplayValue(/Old Body/i), { target: { value: 'Updated Body' } });
  fireEvent.click(screen.getByText(/Update/i));
  
  expect(handlePostUpdated).toHaveBeenCalled();
});