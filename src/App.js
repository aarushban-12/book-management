import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";


function App() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/books" style={styles.link}>Book List</Link>
        <Link to="/add" style={styles.link}>Add Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={<BookList books={books} deleteBook={deleteBook} />}
        />
        <Route path="/add" element={<AddBook addBook={addBook} />} />
        <Route
          path="/edit/:id"
          element={<EditBook books={books} updateBook={updateBook} />}
        />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px 20px",
    backgroundColor: "#282c34",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
