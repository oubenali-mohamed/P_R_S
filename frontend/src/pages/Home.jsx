import React, { useContext } from 'react'
import NavLeft from '../components/NavLeft'
import Tread from '../components/Thread'
import { UidContext } from '../components/AppContext'
import NewPostForm from '../components/Post/NewPostForm'
import Auth from '../components/Auth/Auth'
import Trends from '../components/Trends'
import FriendsHint from '../components/Profil/FriendsHint'
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
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
            {uid && <FriendsHint />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
