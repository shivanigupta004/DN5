import { useState } from 'react'
import './App.css'

const CurrencyConvertor = ({ rate }) => {
  const [rupees, setRupees] = useState(1000)
  const euros = (rupees * rate).toFixed(2)

  return (
    <section className="card">
      <h2>Currency Convertor</h2>
      <p>Convert Indian Rupees to Euros</p>
      <label htmlFor="rupees">Rupees</label>
      <input
        id="rupees"
        type="number"
        value={rupees}
        onChange={(event) => setRupees(Number(event.target.value))}
      />
      <p className="result">
        ₹{rupees.toLocaleString()} = €{euros}
      </p>
      <p className="note">Conversion rate: 1 INR = €{rate}</p>
    </section>
  )
}

const PressableButton = ({ label, onPress }) => (
  <button className="button pressable" onClick={(event) => onPress(event)}>
    {label}
  </button>
)

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const handleWelcome = (event, name) => {
    event.preventDefault()
    setMessage(`Welcome, ${name}!`)
  }

  const handlePress = (event) => {
    event.preventDefault()
    setMessage('Pressed with synthetic onPress behavior!')
  }

  return (
    <div className="app-shell">
      <header className="hero-banner">
        <h1>React Event Handling Lab</h1>
        <p>Increment/Decrement, argument handling, synthetic OnPress, and currency conversion.</p>
      </header>

      <main>
        <section className="card">
          <h2>Counter</h2>
          <div className="counter-row">
            <button className="button" onClick={() => setCount((prev) => prev - 1)}>
              Decrement
            </button>
            <span className="counter-value">{count}</span>
            <button className="button" onClick={() => setCount((prev) => prev + 1)}>
              Increment
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Event Handler Examples</h2>
          <div className="button-group">
            <button className="button" onClick={(event) => handleWelcome(event, 'Student')}>
              Say Welcome
            </button>
            <PressableButton label="Press Me" onPress={handlePress} />
          </div>
          {message && <p className="message">{message}</p>}
        </section>

        <CurrencyConvertor rate={0.011} />
      </main>
    </div>
  )
}

export default App
