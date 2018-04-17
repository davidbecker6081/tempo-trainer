import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import NavLinks from '../../components/NavLinks/NavLinks';
import ShareLinks from '../../components/ShareLinks/ShareLinks';
// import profileShot from '../../assets/user-image.jpg';
import './NavigationView.css';

const NavigationView = () => {
  const user = {
    name: 'Kyle Heppenstall',
    profileImg: '',
  };

  return (
    <header>
      <Avatar user={user} />
      <NavLinks />
      <ShareLinks />
    </header>
  );
};

export default NavigationView;
