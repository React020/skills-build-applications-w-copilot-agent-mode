import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [health, setHealth] = useState('Checking API status...')

  useEffect(() => {
    fetch('/api/health')
      .then((response) => response.json())
      .then((data) => setHealth(data.status === 'ok' ? 'API healthy' : 'API unavailable'))
      .catch(() => setHealth('API unavailable'))
  }, [])

  return (
    <main className="container py-5">
      <section className="p-5 mb-4 rounded-4 bg-dark text-light shadow-sm">
        <p className="text-uppercase small text-info mb-2">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold">Track workouts, teams, and progress in one modern app.</h1>
        <p className="lead text-light-emphasis">
          This multi-tier setup now includes a React 19 + Vite presentation tier and a Node/Express/TypeScript logic tier connected to MongoDB.
        </p>
        <div className="d-flex gap-3 flex-wrap mt-4">
          <span className="badge bg-info text-dark">Frontend: 5173</span>
          <span className="badge bg-success">Backend: 8000</span>
          <span className="badge bg-warning text-dark">MongoDB: 27017</span>
          <span className="badge bg-secondary">API State: {health}</span>
        </div>
      </section>

      <section className="row g-4">
        <article className="col-md-4">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body">
              <h2 className="h5 card-title">Workout Hub</h2>
              <p className="card-text text-muted">Log activities, monitor streaks, and coach your next session with a focused dashboard.</p>
            </div>
          </div>
        </article>
        <article className="col-md-4">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body">
              <h2 className="h5 card-title">Team Insights</h2>
              <p className="card-text text-muted">Organize members, celebrate milestones, and compare leaderboard results in real time.</p>
            </div>
          </div>
        </article>
        <article className="col-md-4">
          <div className="card h-100 border-0 shadow-sm rounded-4">
            <div className="card-body">
              <h2 className="h5 card-title">Data Layer</h2>
              <p className="card-text text-muted">Mongoose models are ready for the OctoFit database and API routes that will extend this shell.</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
