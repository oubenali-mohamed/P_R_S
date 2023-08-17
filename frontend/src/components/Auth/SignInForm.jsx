import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function SingInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailError = document.querySelector('.email.error')
  const passwordError = document.querySelector('.password.error')
  const handleLogin = (e) => {
    e.preventDefault()

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res)
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email
          passwordError.innerHTML = res.data.errors.password
        } else {
          window.location = '/'
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Email</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  )
}

export default SingInForm
