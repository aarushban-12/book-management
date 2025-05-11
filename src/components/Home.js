import React from "react";
import { Link } from "react-router-dom";
import Statistics from "./Statistics";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">📚 Welcome to Your Book Haven</h1>
          <p className="lead text-muted">
            Organize, manage, and keep track of all your favorite reads with ease.  
            Your personal digital library starts here.
          </p>
          <div className="mt-4">
            <Link to="/books" className="btn btn-primary btn-lg me-2">📖 View Books</Link>
            <Link to="/add" className="btn btn-success btn-lg">➕ Add Book</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5 bg-white border-top">
        <div className="container text-center">
          <h2 className="mb-4">🔧 Features</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">📋 Book Listings</h5>
                  <p className="card-text text-muted">View all your books in one organized list with easy options to edit or delete.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">➕ Add New Books</h5>
                  <p className="card-text text-muted">Instantly add books to your library by providing the title and author.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">✏️ Edit & 🗑️ Delete</h5>
                  <p className="card-text text-muted">Quickly update or remove books as your collection changes over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats or Quote */}
      <section className="py-5 bg-light border-top text-center">
        <div className="container">
          <h3 className="mb-3">📈 Track Your Reading Journey</h3>
          <Statistics />
          <p className="text-muted mb-4">
            Whether you’re a casual reader or a bookworm, manage your growing collection effortlessly.
          </p>
          <blockquote className="blockquote">
            <p>"A room without books is like a body without a soul." – Cicero</p>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center">
        <small>© {new Date().getFullYear()} Book Management System.</small>
      </footer>
    </div>
  );
}

export default Home;
