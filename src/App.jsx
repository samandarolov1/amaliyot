import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { salomDe } from './redux/Slices/MainSlice'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(salomDe())
  }, [])
  return (
    <>

    </>
  )
}

export default App
