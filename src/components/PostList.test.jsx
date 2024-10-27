import React from 'react';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';

  test('fetches and displays posts', async () => {
    render(<PostList />);
    expect(await screen.findByText(/Posts/i)).toBeInTheDocument();
  });

  
  test('deletes a post', async () => {
    render(<PostList />);
    
    const deleteButtons = await screen.findAllByText(/Delete/i);
    fireEvent.click(deleteButtons[0]);
  });