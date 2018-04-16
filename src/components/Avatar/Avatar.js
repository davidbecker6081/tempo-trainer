import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = ({ user }) => {
  const name = user.name;
  const userImage = user.profileImg;

  return (
    <article>
      <img src={userImage} alt="user profile" />
      <h1>Kyle Heppenstall</h1>
    </article>
  );
};

export default Avatar;

Avatar.propTypes = {
  user: Proptypes.shape({
    name: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
  }).isRequired,
};
