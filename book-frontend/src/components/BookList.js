// src/components/BookList.js
import React from 'react';

export default function BookList({ books, onDelete, loading }) {
  if (loading) return <p>Loading books…</p>;

  if (!books || books.length === 0) {
    return <p>No books yet. Add one using the form.</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Author</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Published</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Pages</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Genre</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(b => (
          <tr key={b._id ?? b.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{b.title}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{b.author}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {b.publishedDate ? new Date(b.publishedDate).toLocaleDateString() : '-'}
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{b.pages ?? '-'}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{b.genre ?? '-'}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <button
                onClick={() => onDelete(b._id ?? b.id)}
                style={{
                  background: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  padding: '6px 10px',
                  borderRadius: 4,
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
