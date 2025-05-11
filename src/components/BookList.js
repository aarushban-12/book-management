import React from "react";
import { Link } from "react-router-dom";

function BookList({ books, deleteBook }) {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">📚 Your Book Collection</h2>
      {books.length === 0 ? (
        <p className="text-center text-muted">No books added yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card shadow-sm h-100 border-primary">
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text"><strong>Author:</strong> {book.author}</p>
                  {book.pageCount && (
                    <p className="card-text"><strong>Pages:</strong> {book.pageCount}</p>
                  )}
                  {book.genre && (
                    <p className="card-text"><strong>Genre:</strong> {book.genre}</p>
                  )}
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/edit/${book.id}`} className="btn btn-sm btn-outline-primary">✏️ Edit</Link>
                    <button onClick={() => deleteBook(book.id)} className="btn btn-sm btn-outline-danger">🗑️ Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
