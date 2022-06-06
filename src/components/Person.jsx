import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Person({ person }) {
  const history = useHistory()
  return (
    <div className='card' style={{ cursor: 'ponter' }}>
      <h3 onClick={() => history.push(`/info/people/${person.name}`)}>{person.name}</h3>
    </div>
  );
}
