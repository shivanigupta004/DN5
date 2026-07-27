const courses = [
  { id: 1, title: 'React Fundamentals', level: 'Beginner', enrolled: 120 },
  { id: 2, title: 'Advanced React', level: 'Advanced', enrolled: 45 },
  { id: 3, title: 'Node.js Basics', level: 'Beginner', enrolled: 0 },
  { id: 4, title: 'Full Stack Dev', level: 'Intermediate', enrolled: 88 },
]

// Conditional rendering: ternary operator for level color
function LevelTag({ level }) {
  const color = level === 'Beginner' ? '#4caf50' : level === 'Intermediate' ? '#ff9800' : '#f44336'
  return <span style={{ background: color, color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8em' }}>{level}</span>
}

export default function CourseDetails({ show }) {
  // Conditional rendering: early return
  if (!show) return null

  return (
    <section style={styles.section}>
      <h2>🎓 Course Details</h2>
      <ul style={styles.list}>
        {courses.map(course => (
          <li key={course.id} style={styles.item}>
            <strong>{course.title}</strong>&nbsp;
            <LevelTag level={course.level} />
            {/* Ternary: show enrollment or "No students yet" */}
            &nbsp;— {course.enrolled > 0 ? `${course.enrolled} students` : <em style={{ color: '#aaa' }}>No students yet</em>}
          </li>
        ))}
      </ul>
    </section>
  )
}

const styles = {
  section: { background: '#e3f2fd', padding: '16px', borderRadius: '8px', marginBottom: '16px' },
  list: { listStyle: 'none', padding: 0 },
  item: { padding: '6px 0', borderBottom: '1px solid #eee' },
}
