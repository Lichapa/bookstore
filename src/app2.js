import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Categories from './components/categories';
import Books from './components/displayBooks';
import user from './user.png';

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
            <h1 className="nav-header">Bookstore CMS</h1>
            <ul className="nav-item">
              <li>
                <Link to="/">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
            <img
              src={user}
              alt="User Icon"
              width="50"
              height="50"
              className="nav-image"
            />
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
