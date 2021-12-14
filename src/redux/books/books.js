import React from 'react';

function Books() {
  return (
    <div className="container">
      <div>
        <h2>Welcome to our page!</h2>
        <ul>
          <li>
            Book 1 <button>Remove</button>{' '}
          </li>
          <li>
            Book 2 <button>Remove</button>
          </li>
          <li>
            Book 3 <button>Remove</button>
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
          <button>Submit</button>
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
