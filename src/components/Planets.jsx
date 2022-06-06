import React, { useEffect, useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import { useFetchData } from '../context/DataContext';
import Person from './Person';

const fetchPlanets = async (_key, page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json()
};

const Planets = () => {
  const [page, setPage] = useState(1)
  const { resolvedData, latestData, status } = usePaginatedQuery(['planets', page], fetchPlanets);
  const { setFetchData } = useFetchData()

  useEffect(() => {
    if (status === 'success')
      setFetchData(resolvedData)
  }, [status, setFetchData, resolvedData])


  return (
    <div style={{ cursor: "pointer" }}>
      <h2 style={{ textAlign: 'center', margin: '40px', color: 'yellow', fontSize: '30px' }}>Planets</h2>
      {status === 'loading' && <div>Loading data</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <div className='content'>
          <div style={{ textAlign: 'center' }}>
            <button disabled={page === 1} style={{ width: '30%' }} onClick={() => setPage(page => Math.max(page - 1, 1))}>Previous Page</button>
            <span style={{ fontSize: '30px', color: 'white', margin: '0 50px' }}>{page}</span>
            <button disabled={!latestData || !latestData.next} style={{ width: '30%' }} onClick={() => setPage(page => !latestData || !latestData.next ? page : page + 1)}>Next Page</button>
          </div>
          <div className='main'>
            {
              resolvedData.results.map(person => <Person key={person.name} person={person} />)
            }
          </div>
        </div>
      )
      }
    </div >
  );
}

export default Planets 
