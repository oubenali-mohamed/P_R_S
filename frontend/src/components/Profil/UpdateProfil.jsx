import React, { useState } from 'react'
import NavLeft from '../NavLeft'
import { useDispatch, useSelector } from 'react-redux'
import UploadImg from './UploadImg'
import { updateBio } from '../../actions/user.actions';
function UpdateProfil() {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer)
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
         <h4>Menbre depuis le : {userData.createdAt}</h4>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfil
