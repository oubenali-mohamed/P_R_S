import React from 'react'
import { useState } from 'react'
import SignUpForm from './SignUpForm'
import SingInForm from './SignInForm'

function Auth(props) {
  const [singUpModal, setSignUpModal] = useState(props.signup)
  const [singInModal, setSignInModal] = useState(props.signin)

  const handleModals = (e) => {
    if (e.target.id === 'register') {
      setSignInModal(false)
      setSignUpModal(true)
    } else if (e.target.id === 'login') {
      setSignUpModal(false)
      setSignInModal(true)
    }
  }
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={singUpModal ? 'active-btn' : ''}
          >
            Inscription
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={singInModal ? 'active-btn' : ''}
          >
            Connexion
          </li>
        </ul>
        {singUpModal && <SignUpForm />}
        {singInModal && <SingInForm />}
      </div>
    </div>
  )
}

export default Auth
