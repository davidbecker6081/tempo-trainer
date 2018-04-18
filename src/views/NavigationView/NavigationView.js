import React, { Component } from 'react';
import Avatar from '../../components/Avatar/Avatar';
import NavLinks from '../../components/NavLinks/NavLinks';
import ShareLinks from '../../components/ShareLinks/ShareLinks';
import profileShot from '../../assets/j_lucas_profile.png';
import menuButton from '../../assets/menu-button-white.svg';
import './NavigationView.css';

class NavigationView extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: true,
      width: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { showMenu, width } = this.state;
    const rotate = showMenu ? '' : 'rotate-menu';
    const display = width <= 770 && showMenu ? 'hide' : 'active';
    const user = {
      name: 'Jason Lucas',
      profileImg: profileShot,
    };

    return (
      <header className="nav-wrapper">
        <Avatar user={user} />
        <button className={`menu-btn ${rotate}`} onClick={() => this.setState({ showMenu: !showMenu })} />
        <NavLinks display={display} />
        <ShareLinks />
      </header>
    );
  }
}

export default NavigationView;
