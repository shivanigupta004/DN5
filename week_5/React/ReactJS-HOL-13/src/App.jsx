import { useState } from 'react'
import BookDetails from './BookDetails.jsx'
import BlogDetails from './BlogDetails.jsx'
import CourseDetails from './CourseDetails.jsx'

const TABS = ['Books', 'Blogs', 'Courses', 'All']

// Conditional rendering: switch statement (element variable)
function ActiveTabContent({ active }) {
  let content
  switch (active) {
    case 'Books':
      content = <BookDetails show={true} />
      break
    case 'Blogs':
      content = <BlogDetails show={true} />
      break
    case 'Courses':
      content = <CourseDetails show={true} />
      break
    case 'All':
      content = (
        <>
          <BookDetails show={true} />
          <BlogDetails show={true} />
          <CourseDetails show={true} />
        </>
      )
      break
    default:
      content = null
  }
  return content
}

export default function App() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div style={styles.shell}>
      <header style={styles.header}>
        <h1>📖 Blogger App</h1>
        <p>Conditional Rendering Demo — Books, Blogs &amp; Courses</p>
      </header>

      {/* Conditional rendering: map() to render tab buttons */}
      <nav style={styles.nav}>
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={activeTab === tab ? { ...styles.tab, ...styles.activeTab } : styles.tab}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main style={styles.main}>
        {/* Conditional rendering: && to show hint when no tab selected */}
        {!activeTab && <p>Select a tab to view content.</p>}

        {/* Conditional rendering: switch via component */}
        <ActiveTabContent active={activeTab} />
      </main>
    </div>
  )
}

const styles = {
  shell: { fontFamily: 'Arial, sans-serif', maxWidth: '720px', margin: '0 auto', padding: '20px' },
  header: { background: '#3f51b5', color: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '16px' },
  nav: { display: 'flex', gap: '8px', marginBottom: '20px' },
  tab: { padding: '8px 18px', border: '2px solid #3f51b5', borderRadius: '6px', background: '#fff', color: '#3f51b5', cursor: 'pointer', fontWeight: 'bold' },
  activeTab: { background: '#3f51b5', color: '#fff' },
  main: {},
}
