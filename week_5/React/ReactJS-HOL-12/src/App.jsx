import { useState } from 'react'
import './App.css'

const flights = [
  { id: 1, from: 'New York', to: 'London', date: '2025-08-10', price: '$450' },
  { id: 2, from: 'Paris', to: 'Tokyo', date: '2025-08-15', price: '$820' },
  { id: 3, from: 'Dubai', to: 'Sydney', date: '2025-08-20', price: '$610' },
]

// Conditional rendering: early return (prevent component from rendering)
function GuestPage() {
  return (
    <div className="card">
      <h2>✈️ Available Flights</h2>
      <p>Browse flights below. Please log in to book a ticket.</p>
      <table>
        <thead>
          <tr>
            <th>From</th><th>To</th><th>Date</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td>{f.from}</td><td>{f.to}</td><td>{f.date}</td><td>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function UserPage() {
  const [booked, setBooked] = useState(null)

  return (
    <div className="card">
      <h2>🎟️ Book a Flight</h2>

      {/* Conditional rendering: && operator */}
      {booked && (
        <div className="success-msg">
          ✅ Successfully booked: {booked.from} → {booked.to} on {booked.date} ({booked.price})
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>From</th><th>To</th><th>Date</th><th>Price</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td>{f.from}</td>
              <td>{f.to}</td>
              <td>{f.date}</td>
              <td>{f.price}</td>
              <td>
                {/* Conditional rendering: ternary — show "Booked" if this flight is selected */}
                {booked?.id === f.id
                  ? <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>✅ Booked</span>
                  : <button className="btn btn-book" onClick={() => setBooked(f)}>Book</button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="app-shell">
      <header className="header">
        <h1>✈️ Ticket Booking App</h1>
        <p>{isLoggedIn ? 'Welcome back! You can now book tickets.' : 'Browse available flights or log in to book.'}</p>
      </header>

      <div className="auth-bar">
        <span>Status: <strong>{isLoggedIn ? 'Logged In' : 'Guest'}</strong></span>
        {/* Conditional rendering: ternary for Login/Logout button */}
        {isLoggedIn
          ? <button className="btn btn-logout" onClick={() => setIsLoggedIn(false)}>Logout</button>
          : <button className="btn btn-login" onClick={() => setIsLoggedIn(true)}>Login</button>
        }
      </div>

      {/* Conditional rendering: ternary — show UserPage or GuestPage */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  )
}
