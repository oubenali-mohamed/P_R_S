import React from 'react'
import NavLeft from '../components/NavLeft'
import Tread from '../components/Thread'
function Home() {
  return (
    <div className="home">
      <NavLeft />
      <div className="main">
        <Tread />
      </div>
    </div>
  )
}

export default Home
