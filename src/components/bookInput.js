import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = (props) => {
  const [bookForm, setBookForm] = useState({
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setBookForm({
      ...bookForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleBtn = (e) => {
    e.preventDefault();
    const { addBook } = props;
    if (bookForm.title === '' || bookForm.author === '') {
      alert('Fill all fields');
    } else {
      // formValid(bookForm);
      addBook(bookForm);
      setBookForm({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div id="form-container">
      <h3 id="form-title">ADD NEW BOOK</h3>
      <form id="add-form">
        <input
          type="text"
          id="input-book-title"
          name="title"
          placeholder="Book Title"
          value={bookForm.title}
          onChange={onChange}
        />
        <input
          type="text"
          id="input-book-author"
          name="author"
          placeholder="Book Author"
          value={bookForm.author}
          onChange={onChange}
        />

        <button id="add-btn" type="submit" onClick={handleBtn}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
