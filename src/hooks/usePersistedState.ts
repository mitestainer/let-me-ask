import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export const usePersistedState = <T>(key: string, initialState: T): Response<T> => {
  const [info, setInfo] = useState(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(info))
  }, [key, info])

  return [info, setInfo]
}