import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostList from './PostList';

global.fetch = jest.fn(() =>
  Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
          { id: 1, userId: 1, title: 'Post 1', body: 'This is the first post' },
          { id: 2, userId: 2, title: 'Post 2', body: 'This is the second post' },
      ]),
  })
);

  // test('fetches and displays posts', async () => {
  //   render(<PostList />);
  //   await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
  //   expect(await screen.findByText(/Posts/i)).toBeInTheDocument();
  // });

  
  // test('deletes a post', async () => {
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //         ok: true,
  //   json: () => Promise.resolve({ id: 2 }),            })
  // );
  //   render(<PostList />);
    
  //   const deleteButtons = await screen.findAllByText(/Delete/i);
  //   fireEvent.click(deleteButtons[0]);
  // });