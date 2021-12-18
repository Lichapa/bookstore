import React from 'react';
import Proptypes from 'prop-types';

export default function Book({ title, author, deleteBook }) {
  return (
    <li>
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <button type="submit" className="remove-btn" onClick={deleteBook}>
        REMOVE
      </button>
    </li>
  );
}

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  deleteBook: Proptypes.func.isRequired,
};
