import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from '../utils'

function FollowHandler({ idToFollow }) {
  const userData = useSelector((state) => state.userReducer)
  const [isFollowing, setIsFollowing] = useState(false)

  /* const handleFollow = () => {
    
  }

  const handleUnFollow = () => {
    
  } */
  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToFollow)) {
        setIsFollowing(true)
      } else {
        setIsFollowing(false)
      }
    }
  }, [userData, idToFollow])
  return (
    <>
      {isFollowing && (
        <span>
          <button className="unfollow-btn">Abonné</button>
        </span>
      )}
      {isFollowing === false && (
        <span>
          <button className="follow-btn">Suivre</button>
        </span>
      )}
    </>
  )
}
export default FollowHandler
