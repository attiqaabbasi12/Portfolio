import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './MainPage'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App