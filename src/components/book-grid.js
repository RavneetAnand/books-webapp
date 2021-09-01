import { useEffect } from 'react';
import { connect } from 'react-redux';

import './book.css';
import { getBooksList } from '../redux/actions';
import Book from './book';

const mapStateToProps = (state) => {
  return {
    booksList: state.bookReducer.value,
    loading: state.bookReducer.loading
  }
};

const mapDispatchToProps = { getBooksList };

// Book grid component
export const BookGrid = ({booksList, loading, getBooksList}) => {
  // Fetch data only once at loading
  useEffect(() => {
      getBooksList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    loading? <div className="App">Loading...</div> :
    <div className="App">
      <h2>Books You Might Like</h2>
      <div className="books">
        {booksList.map(book => <Book key={book.id} bookDetail={book}/>)}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookGrid);
