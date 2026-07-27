import './App.css'
import CohortDetails from './CohortDetails'

const cohorts = [
  {
    name: 'Cohort Alpha',
    status: 'ongoing',
    startDate: '2026-07-01',
    endDate: '2026-09-30',
    completed: false,
  },
  {
    name: 'Cohort Beta',
    status: 'completed',
    startDate: '2026-03-01',
    endDate: '2026-06-30',
    completed: true,
  },
  {
    name: 'Cohort Gamma',
    status: 'ongoing',
    startDate: '2026-08-15',
    endDate: '2026-11-15',
    completed: false,
  },
]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cohort Dashboard</h1>
        <p>Ongoing and completed cohort details</p>
      </header>
      <main>
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.name} cohort={cohort} />
        ))}
      </main>
    </div>
  )
}

export default App
