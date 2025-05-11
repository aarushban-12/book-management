import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBook({ books, updateBook }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    pageCount: "",
    genre: ""
  });

  useEffect(() => {
    const found = books.find((b) => b.id === parseInt(id));
    if (found) setBook(found);
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author) {
      updateBook(book);
      navigate("/books");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">✏️ Edit Book</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Book Title</label>
                  <input
                    type="text"
                    className="form-control"
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
                    value={book.pageCount}
                    onChange={(e) => setBook({ ...book, pageCount: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Genre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={book.genre}
                    onChange={(e) => setBook({ ...book, genre: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBook;
