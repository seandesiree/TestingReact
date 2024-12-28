import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import PostList from './PostList';



  test('fetches and displays posts', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
          ok: true,
          json: () => Promise.resolve([
              { id: 1, userId: 1, title: 'Post 1', body: 'This is the first post' },
              { id: 2, userId: 2, title: 'Post 2', body: 'This is the second post' },
          ]),
      })
    );
    render(<PostList />);
    await waitFor(() => {
      expect(screen.getByText(/Post 1/)).toBeInTheDocument()
      })
  });


  test('deletes a post', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
          { id: 1, userId: 1, title: 'Post 1', body: 'This is the first post' },
          { id: 2, userId: 2, title: 'Post 2', body: 'This is the second post' },
      ]),            
    })
  );
    render(<PostList />);
      await screen.findAllByText(/Delete/)
      const deleteButtons = screen.getAllByText(/Delete/);
      fireEvent.click(deleteButtons[0]);
  });