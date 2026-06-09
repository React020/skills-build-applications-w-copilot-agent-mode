import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('OctoFit React 19 app', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ok' }),
      })
    ))
  })

  it('renders the OctoFit Tracker hero section', async () => {
    render(<App />)

    expect(await screen.findByText('OctoFit Tracker')).toBeInTheDocument()
    expect(screen.getByText(/Track workouts, teams, and progress/i)).toBeInTheDocument()
  })

  it('checks the app API through the local frontend route', async () => {
    const fetchMock = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 'ok' }),
      })
    )

    vi.stubGlobal('fetch', fetchMock)

    render(<App />)

    expect(await screen.findByText(/API healthy/i)).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledWith('/api/health')
  })
})
