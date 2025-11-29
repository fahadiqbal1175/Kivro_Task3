// src/App.js
import React, { useEffect, useState } from 'react';
import api from './api';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState(null); // { type: 'success'|'error', message: '' }

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    setLoading(true);
    try {
      const res = await api.get('/books');
      // normalize id field from backend (some backends return `id` instead of `_id`)
      const data = Array.isArray(res.data)
        ? res.data.map(b => ({ ...b, _id: b._id ?? b.id }))
        : res.data;
      setBooks(data);
    } catch (err) {
      showAlert('error', 'Failed to load books');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function showAlert(type, message, timeout = 3000) {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), timeout);
  }

  async function handleAdd(bookPayload) {
    // bookPayload already shaped in BookForm
    setSubmitting(true);
    try {
      const res = await api.post('/books', bookPayload);
      // backend might return created book directly or under { book: ... }
      const created = res.data?.book ?? res.data;
      // normalize id field
      const newBook = created ? { ...created, _id: created._id ?? created.id } : created;
      // add new book at top
      setBooks(prev => (newBook ? [newBook, ...prev] : prev));
      showAlert('success', 'Book added successfully');
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.error || 'Failed to add book';
      showAlert('error', msg);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this book?')) return;
    try {
      await api.delete(`/books/${id}`);
      setBooks(prev => prev.filter(b => b._id !== id));
      showAlert('success', 'Book deleted');
    } catch (err) {
      console.error(err);
      const msg = err?.response?.data?.error || 'Failed to delete book';
      showAlert('error', msg);
    }
  }

  return (
    <div className="container">
      <h1>Book Manager</h1>

      {alert && (
        <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          {alert.message}
        </div>
      )}

      <section style={{ marginBottom: 24 }}>
        <h2>Add a new book</h2>
        <BookForm onAdd={handleAdd} submitting={submitting} />
      </section>

      <section>
        <h2>Books</h2>
        <BookList books={books} onDelete={handleDelete} loading={loading} />
      </section>
    </div>
  );
}

export default App;
