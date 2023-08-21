import React, { useContext } from 'react'
import NavLeft from '../components/NavLeft'
import Tread from '../components/Thread'
import { UidContext } from '../components/AppContext'
import NewPostForm from '../components/Post/NewPostForm'
import Auth from '../components/Auth/Auth'
function Home() {
  const uid = useContext(UidContext)
  return (
    <div className="home">
      <NavLeft />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Auth signin={true} signup={false} />}
        </div>
        <Tread />
      </div>
    </div>
  )
}

export default Home
