import React, { useContext, useState } from 'react'

export const DataContext = React.createContext({
  data: undefined,
  setData: (_data) => null
})

export const useFetchData = () => useContext(DataContext)

export const DataProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState()
  return <DataContext.Provider value={{ fetchData, setFetchData }}>{children}</DataContext.Provider>
}


