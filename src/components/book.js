import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <li key={book.item_id}>
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.category}</p>
      <button type="submit" className="remove-btn" onClick={() => { deleteBook(book.item_id); }}>
        REMOVE
      </button>
    </li>
  );
};

Book.propTypes = {
  book: Proptypes.shape({
    item_id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    category: Proptypes.string.isRequired,
  }).isRequired,
};

export default Book;
