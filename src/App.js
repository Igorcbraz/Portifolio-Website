import React, { useEffect } from 'react'
import Aos from 'aos'

import { Home } from './pages/home.jsx'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return <Home />
}

export default App
