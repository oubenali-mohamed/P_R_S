/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { dateParse, isEmpty } from '../utils'
import FollowHandler from '../Profil/FollowHandler'
import LikeButton from './LikeButton'
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
            <p>{post.message}</p>
            {post.picture && (
              <img src={post.picture} alt="post-pict" className="card-pic" />
            )}
            {post.video && (
              <iframe
                width="500"
                height="500"
                src={post.video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img src="./img/icons/message1.svg" alt="comment" />
                <span>{post.comments.length}</span>
              </div>
              <h3><LikeButton post={post}/></h3>
              <img src="./img/icons/share.svg" alt="share" />
            </div>
          </div>
        </>
      )}
    </li>
  )
}
export default Card
