import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UidContext } from './AppContext'
import Logout from './Auth/Logout'
import { useSelector } from 'react-redux'
function NavBar() {
  const uid = useContext(UidContext)
  const userData = useSelector((state) => state.userReducer)

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/">
            <div className="logo">
              <img src="./img/videoPlay.png" alt="logo du site" />
              <h3>Réseau Social</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to="/profil">Bienvenue {userData.username}</NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to="/profil">
                <img src="./img/icons/login.svg" alt="logo connexion" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar
