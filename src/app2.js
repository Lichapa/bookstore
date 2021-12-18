import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Categories from './components/categories';
import Books from './components/displayBooks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav">
            <h1>Bookstore CMS</h1>
            <ul className="nav-item">
              <li>
                <Link to="/books">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
