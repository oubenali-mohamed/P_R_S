import React, { useState } from 'react'
import NavLeft from '../NavLeft'
import { useDispatch, useSelector } from 'react-redux'
import UploadImg from './UploadImg'
import { updateBio } from '../../actions/user.actions';
import { dateParse } from '../utils';
function UpdateProfil() {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer)
  const [followersPopup, setFollowersPopup] = useState(false);
  const [followingPopup, setFollowingPopup] = useState(false);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <NavLeft />
      <h1>Profil de {userData.username} </h1>
      <div className="update-container">
        <div className="left-part">
          <h3>photo de profil</h3>
          <img src={userData.picture} alt="user pict" />
          <UploadImg />
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider modifications</button>
              </>
            )}
          </div>
         <h4>Menbre depuis le : {dateParse(userData.createdAt)}</h4>
         <h5 onClick={()=> setFollowingPopup(true)}> Abonnement : {userData.following ? userData.following.length : ""}</h5>
         <h5 onClick={()=> setFollowersPopup(true)}>Abonnés : {userData.followers ? userData.followers.length : ""}</h5>
        </div>
      </div>
      {followingPopup && (
      <div className="popup-profil-container">
        <div className="modal">
          <h3>Abonnements</h3>
          <span className="cross" onClick={()=> setFollowingPopup(false)}>
            &#10005;
          </span>
          <ul>
            {userData.following.map((user) => (
              <li key={user._id}>{user.username}</li>
            ))}
          </ul>
        </div>
        </div>
      )}
      
    </div>
  )
}

export default UpdateProfil