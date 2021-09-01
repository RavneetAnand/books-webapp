import { Provider } from 'react-redux';
import store from './redux/store';

import { render, screen } from '@testing-library/react';
import BookGrid from './components/book-grid';

describe('App', () => {
  test('renders connected App component', () => {
      render(
        <Provider store={store}>
          <BookGrid />
        </Provider>
      );
      const linkElement = screen.getByText('Loading...');
      expect(linkElement).toBeTruthy();
  });
});