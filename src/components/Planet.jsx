import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Planet({ planet }) {
  const history = useHistory()

  return (
    <div className='card' style={{ cursor: 'pointer' }}>
      <h3 onClick={() => history.push(`/info/planets/${planet.name}`)}>{planet.name}</h3>
    </div>
  );
}
