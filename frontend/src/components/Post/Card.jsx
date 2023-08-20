import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dateParse, isEmpty } from '../utils'
import FollowHandler from '../Profil/FollowHandler'
import LikeButton from './LikeButton'
import { updatePost } from '../../actions/post.actions'
import DeleteCard from './DeleteCard'
import CardComments from './CardComments'
function Card({ post }) {
  const [isLoading, seIsLoading] = useState(true)
  const [isUpdated, setIsUpdated] = useState(false)
  const [textUpdate, setTextUpdate] = useState(null)
  const [showComments, setShowComments] = useState(false)
  const usersData = useSelector((state) => state.usersReducer)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate))
    }
    setIsUpdated(false)
  }
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
                    else {
                      return null
                    }
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
                        else {
                          return null
                        }
                      })
                      .join('')}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={'card'} />
                )}
              </div>
              <span>{dateParse(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modifications
                  </button>
                </div>
              </div>
            )}
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
            {userData._id === post.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="editer" />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                <img
                  onClick={() => setShowComments(!showComments)}
                  src="./img/icons/message1.svg"
                  alt="comment"
                />

                <span>{post.comments.length}</span>
              </div>
              <h3>
                <LikeButton post={post} />
              </h3>
              <img src="./img/icons/share.svg" alt="share" />
            </div>
            {showComments && <CardComments post={post} />}
          </div>
        </>
      )}
    </li>
  )
}
export default Card
