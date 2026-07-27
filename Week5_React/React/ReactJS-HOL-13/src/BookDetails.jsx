const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', available: true },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', available: false },
  { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson', available: true },
]

export default function BookDetails({ show }) {
  // Conditional rendering: early return (prevent rendering)
  if (!show) return null

  return (
    <section style={styles.section}>
      <h2>📚 Book Details</h2>
      <ul style={styles.list}>
        {books.map(book => (
          <li key={book.id} style={styles.item}>
            <strong>{book.title}</strong> — {book.author}
            {/* Conditional rendering: && operator */}
            {book.available && <span style={styles.badge('green')}> ✅ Available</span>}
            {!book.available && <span style={styles.badge('red')}> ❌ Unavailable</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

const styles = {
  section: { background: '#fff8e1', padding: '16px', borderRadius: '8px', marginBottom: '16px' },
  list: { listStyle: 'none', padding: 0 },
  item: { padding: '6px 0', borderBottom: '1px solid #eee' },
  badge: (color) => ({ color, fontWeight: 'bold', marginLeft: '8px' }),
}
