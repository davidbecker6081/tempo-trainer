import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ user }) => {
  const name = user.name;
  const userImage = user.profileImg;

  return (
    <article className="avatar-container">
      <img src={userImage} alt="user profile" />
      <h1>{name}</h1>
    </article>
  );
};

export default Avatar;

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
  }).isRequired,
};
