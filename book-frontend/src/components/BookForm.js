// src/components/BookForm.js
import React, { useState } from 'react';

export default function BookForm({ onAdd, submitting }) {
  const [form, setForm] = useState({
    title: '',
    author: '',
    publishedDate: '',
    pages: '',
    genre: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // convert pages to number and publishedDate to ISO if provided
    const payload = {
      title: form.title.trim(),
      author: form.author.trim(),
      publishedDate: form.publishedDate ? form.publishedDate : undefined,
      pages: form.pages ? Number(form.pages) : undefined,
      genre: form.genre ? form.genre.trim() : undefined
    };
    onAdd(payload);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <div style={{ marginBottom: 8 }}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title (required)"
          required
          style={{ padding: 8, width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author (required)"
          required
          style={{ padding: 8, width: '100%' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input
          name="publishedDate"
          value={form.publishedDate}
          onChange={handleChange}
          type="date"
          style={{ padding: 8, flex: 1 }}
        />
        <input
          name="pages"
          value={form.pages}
          onChange={handleChange}
          type="number"
          min="1"
          placeholder="Pages"
          style={{ padding: 8, width: 120 }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <input
          name="genre"
          value={form.genre}
          onChange={handleChange}
          placeholder="Genre"
          style={{ padding: 8, width: '100%' }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        style={{
          padding: '8px 14px',
          background: '#2ecc71',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        {submitting ? 'Adding...' : 'Add Book'}
      </button>
    </form>
  );
}
