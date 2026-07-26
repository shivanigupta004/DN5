import { useState } from 'react'
import '../Stylesheets/mystyle.css'

export default function CalculateScore(){
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [total, setTotal] = useState('')
  const [goal, setGoal] = useState('')
  const [average, setAverage] = useState(null)

  function handleCalculate(e){
    e.preventDefault()
    const t = parseFloat(total)
    const g = parseFloat(goal)
    if (!isFinite(t) || !isFinite(g) || g === 0) {
      setAverage('Invalid input')
      return
    }
    const avg = t / g
    setAverage(avg.toFixed(2))
  }

  return (
    <div className="score-card">
      <h2>Calculate Score</h2>
      <form onSubmit={handleCalculate} className="score-form">
        <label>
          Name:
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          School:
          <input value={school} onChange={e => setSchool(e.target.value)} />
        </label>
        <label>
          Total (sum of marks):
          <input value={total} onChange={e => setTotal(e.target.value)} />
        </label>
        <label>
          Goal (number of subjects):
          <input value={goal} onChange={e => setGoal(e.target.value)} />
        </label>
        <button type="submit">Calculate Average</button>
      </form>

      {average !== null && (
        <div className="result">
          <p><strong>Student:</strong> {name || '—'}</p>
          <p><strong>School:</strong> {school || '—'}</p>
          <p><strong>Average Score:</strong> {average}</p>
        </div>
      )}
    </div>
  )
}
