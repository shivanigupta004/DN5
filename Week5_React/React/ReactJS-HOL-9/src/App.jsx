import { useState } from 'react'
import './App.css'
import ListOfPlayers from './ListOfPlayers'
import IndianPlayers from './IndianPlayers'

function App() {
  const [flag, setFlag] = useState(true)

  return (
    <div className="app-shell">
      <header className="hero-header">
        <h1>Cricket App</h1>
        <p>Learn ES6 features through players, map, filter, destructuring, and merge.</p>
        <button className="toggle-button" onClick={() => setFlag((prev) => !prev)}>
          Show {flag ? 'Indian Players' : 'List of Players'}
        </button>
      </header>

      {flag ? <ListOfPlayers /> : <IndianPlayers />}

      <footer className="footer-note">
        <p>Use the flag toggle to switch between the two components.</p>
      </footer>
    </div>
  )
}

export default App
