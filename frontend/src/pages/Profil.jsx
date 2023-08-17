import React, { useContext } from 'react'
import Auth from '../components/Auth/Auth'
import { UidContext } from '../components/AppContext'
import UpdateProfil from '../components/Profil/UpdateProfil'

function Profil() {
  const uid = useContext(UidContext)
  return (
    <div className="profil-page">
      {uid ? (
       <UpdateProfil />
      ) : (
        <div className="log-container">
          <Auth signin={false} signup={true} />
          <div className="img-container">
            <img src="../img/auth.svg" alt="img authentification" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Profil
