import { useState } from 'react'
import { useRouteMatch } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useFetchData } from "../context/DataContext"
import { fetchGoogle } from './googleApi'


const Info = () => {
  const { fetchData } = useFetchData()
  const history = useHistory()
  const match = useRouteMatch()
  const filterArr = ['name', 'species', 'residents', 'homeworld', 'films', 'vehicles', 'starships', 'url', 'created', 'edited']
  const [url, setUrl] = useState()

  const fetch = async (item) => {
    if (url) return
    const result = await fetchGoogle(item.name)
    const { data: { response: { images } } } = result
    setUrl(images[0].image.url)
    console.log('url set')
  }

  return (
    <div className='info'>
      {fetchData?.results && fetchData?.results?.filter(i => i.name === match.params.itemName).map((item) => {
        fetch(item)
        return (
          <div style={{ display: 'flex' }}>
            {url ? (
              <>
                <img src={url} alt={item.name} style={{ width: '300px', height: 'auto', marginRight: '20px', marginTop: '15px' }} />
                <div>
                  <h3 style={{ color: 'yellow' }}>{item.name}</h3>
                  {Object.entries(item).filter(i => !filterArr.includes(i[0])).map(i => (<p>{i[0]} - {i[1]}</p>))}
                </div>
              </>) : <h3 style={{ fontSize: '30px', textAlign: 'center', alignSelf: 'center' }}>Loading...</h3>}
          </div>
        )
      })}
      <button style={{ margin: '16px 0' }} onClick={() => history.push(`/${match.params.section}`)}>GO BACK</button>
    </div>
  )
}

export default Info
