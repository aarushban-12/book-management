import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook({ addBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pageCount: "",
    genre: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.pageCount && book.genre) {
      addBook(book);
      navigate("/books");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-success">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">➕ Add a New Book</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Book Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. The Great Gatsby"
                    value={book.title}
                    onChange={(e) => setBook({ ...book, title: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Author</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. F. Scott Fitzgerald"
                    value={book.author}
                    onChange={(e) => setBook({ ...book, author: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Page Count</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g. 180"
                    value={book.pageCount}
                    onChange={(e) => setBook({ ...book, pageCount: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Classic Fiction"
                    value={book.genre}
                    onChange={(e) => setBook({ ...book, genre: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">Add Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
