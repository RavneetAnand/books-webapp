import { Provider } from 'react-redux';
import store from './redux/store';
import { render, screen } from '@testing-library/react';

import App from './App'
import BookGrid from './components/book-grid';
import Login from './components/login';
import Book from './components/book';

describe('App', () => {
  test('renders connected App component', () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const linkElement = screen.getByText('Username');
      expect(linkElement).toBeTruthy();
  });
});

describe('BookGrid', () => {
  test('renders connected BookGrid component', () => {
      render(
        <Provider store={store}>
          <BookGrid />
        </Provider>
      );
      const linkElement = screen.getByText('Loading...');
      expect(linkElement).toBeTruthy();
  });
});

describe('Login', () => {
  test('renders connected Login component', () => {
      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );
      const linkElement = screen.getByText('Login');
      expect(linkElement).toBeTruthy();
  });
});

describe('Book', () => {
  test('renders connected Book component', () => {
    const props = {
      location: 'books/RM_Books/packtpub/',
      title: 'Learning BeagleBone Python Programming',
      contributor: 'Alexander Hiam',
      coverfile: '9781784399702.jpg',
      uniqueUrl: 'https://www.perlego.com/book/3969/learning-beaglebone-python-programming'
    }
    render(<Book bookDetail={props} />)
    screen.debug();
  });
});