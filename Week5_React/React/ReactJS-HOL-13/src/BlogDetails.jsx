const blogs = [
  { id: 1, title: 'Getting Started with React', category: 'React', published: true },
  { id: 2, title: 'Understanding Hooks', category: 'React', published: true },
  { id: 3, title: 'Draft: Advanced Patterns', category: 'React', published: false },
  { id: 4, title: 'CSS-in-JS Overview', category: 'CSS', published: true },
]

// Conditional rendering: element variable
function StatusBadge({ published }) {
  let badge
  if (published) {
    badge = <span style={{ color: 'green' }}>Published</span>
  } else {
    badge = <span style={{ color: 'orange' }}>Draft</span>
  }
  return badge
}

export default function BlogDetails({ show }) {
  // Conditional rendering: early return
  if (!show) return null

  return (
    <section style={styles.section}>
      <h2>📝 Blog Details</h2>
      <ul style={styles.list}>
        {/* Conditional rendering: map() with filter */}
        {blogs.map(blog => (
          <li key={blog.id} style={styles.item}>
            <strong>{blog.title}</strong>
            <span style={styles.category}>[{blog.category}]</span>
            {/* Element variable usage */}
            &nbsp;— <StatusBadge published={blog.published} />
          </li>
        ))}
      </ul>
    </section>
  )
}

const styles = {
  section: { background: '#e8f5e9', padding: '16px', borderRadius: '8px', marginBottom: '16px' },
  list: { listStyle: 'none', padding: 0 },
  item: { padding: '6px 0', borderBottom: '1px solid #eee' },
  category: { color: '#888', marginLeft: '8px', fontSize: '0.85em' },
}
