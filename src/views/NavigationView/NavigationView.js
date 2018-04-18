import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import NavLinks from '../../components/NavLinks/NavLinks';
import ShareLinks from '../../components/ShareLinks/ShareLinks';
import profileShot from '../../assets/j_lucas_profile.png';
import './NavigationView.css';

const NavigationView = () => {
  const user = {
    name: 'Jason Lucas',
    profileImg: profileShot,
  };

  return (
    <header className="nav-wrapper">
      <Avatar user={user} />
      <NavLinks />
      <ShareLinks />
    </header>
  );
};

export default NavigationView;
