import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';
import BookForm from './bookInput';
import Book from './book';

const BookList = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState(store.getState().bookReducer);

  const submitBook = ({ title, author }) => {
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
    };

    dispatch(addBook(newBook));

    localStorage.setItem(
      'BooksList',
      JSON.stringify(store.getState().booksReducer),
    );
    setBooks(JSON.parse(localStorage.getItem('BooksList')));
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));

    localStorage.setItem(
      'BooksList',
      JSON.stringify(store.getState().booksReducer),
    );
    setBooks(JSON.parse(localStorage.getItem('BooksList')));
  };

  return (
    <div id="book-page-container">
      <div id="books-container">
        {books?.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            deleteBook={() => deleteBook(book)}
          />
        ))}
      </div>
      <BookForm addBook={submitBook} />
    </div>
  );
};

export default BookList;
