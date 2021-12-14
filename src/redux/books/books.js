import React from 'react';

function Books() {
  return (
    <div className="container">
      <div>
        <ul>
          <li>
            Book 1
            <button type="button">Remove</button>
          </li>
          <li>
            Book 2
            <button type="button">Remove</button>
          </li>
          <li>
            Book 3
            <button type="button">Remove</button>
          </li>
        </ul>
      </div>

      <div className="books-form">
        <form>
          <input
            type="text"
            className="book-title"
            placeholder="Book title"
            required
          />
          <input
            name="categories"
            id="categories"
            list="category"
            placeholder="Category"
            required
          />
          <button type="button">Submit</button>
        </form>
        <datalist id="category">
          <option>Javascript</option>
          <option>React</option>
          <option>Ruby</option>
        </datalist>
      </div>
    </div>
  );
}
export default Books;
