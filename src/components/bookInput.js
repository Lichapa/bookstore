import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const { v4: uuidv4 } = require('uuid');

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setBookFormTitle] = useState('');
  const [category, setBookFormCategory] = useState('');

  const onTitleChange = (e) => {
    setBookFormTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setBookFormCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(book));
    e.preventDefault();
    setBookFormTitle('');
    setBookFormCategory('');
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
          value={title}
          onChange={onTitleChange}
          required
        />
        <input
          type="text"
          id="input-book-category"
          name="category"
          list="categories"
          placeholder="Book Category"
          value={category}
          onChange={onCategoryChange}
          required
        />

        <button id="add-btn" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
      <datalist id="categories">
        <option>Comedy</option>
        <option>Programming</option>
        <option>Sci-Fi</option>
        <option>Religion</option>
        <option>Adventure</option>
        <option>Education</option>
        <option>Music</option>
      </datalist>
    </div>
  );
};

export default BookForm;
