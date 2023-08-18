/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { dateParse, isEmpty } from '../utils'
import FollowHandler from '../Profil/FollowHandler'

function Card({ post }) {
  const [isLoading, seIsLoading] = useState(true)
  const usersData = useSelector((state) => state.usersReducer)
  const userData = useSelector((state) => state.userReducer)

  useEffect(() => {
    !isEmpty(usersData[0]) && seIsLoading(false)
  }, [usersData])
  return (
    <li className="card-container" key={postMessage._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture
                  })
                  .join('')
              }
              alt="poster pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.username
                      })
                      .join('')}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={'card'} />
                )}
              </div>
              <span>{dateParse(post.createdAt)}</span>
            </div>
          </div>
        </>
      )}
    </li>
  )
}
export default Card
