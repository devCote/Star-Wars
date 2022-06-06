import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
  const history = useHistory()

  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => history.push('/planets')}>Planets</button>
      <button onClick={() => history.push('/people')}>People</button>
    </nav>
  )
}
