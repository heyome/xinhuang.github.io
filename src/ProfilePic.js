import React from 'react';
import profilePic from './me.jpg'; // replace this with the path to your image file

function ProfilePic() {
  const style = {
    width: '150px',
    borderRadius: '50%',
  };

  return <img src={profilePic} alt="Profile" style={style} />;
}

export default ProfilePic;
