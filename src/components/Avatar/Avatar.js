import React, { Component } from 'react';
import PropTypes from 'prop-types';
import chariots from '../../assets/music/chariots-of-fire.m4a';
import dontStopMeNow from '../../assets/music/dont-stop-me-now.m4a';
import eyeOfTiger from '../../assets/music/eye-of-the-tiger.m4a';
import finalCount from '../../assets/music/final-countdown.m4a';
import heatIsOn from '../../assets/music/heat-is-on.m4a';
import hereIGoAgain from '../../assets/music/here-i-go-again.m4a';
import highwayDanger from '../../assets/music/highway-to-danger-zone.m4a';
import hitMeWithShot from '../../assets/music/hit-me-with-your-best-shot.m4a';
import hustlin from '../../assets/music/hustlin.m4a';
import giveYouUp from '../../assets/music/never-gonna-give-you-up.m4a';
import goodTime from '../../assets/music/nothin-but-a-good-time.m4a';
import pourSomeSugar from '../../assets/music/pour-some-sugar-on-me.m4a';
import pumpUpJam from '../../assets/music/pump-up-the-jam.m4a';
import rockYou from '../../assets/music/rock-you-like-a-hurricane.m4a';
import rocky from '../../assets/music/rocky.m4a';
import jungle from '../../assets/music/Welcome-To-The-Jungle.m4a';
import './Avatar.css';

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: '',
      play: false,
    };
  }

  changeCurrentSong() {
    const songs = [
      chariots,
      dontStopMeNow,
      eyeOfTiger,
      finalCount,
      heatIsOn,
      hereIGoAgain,
      highwayDanger,
      hitMeWithShot,
      hustlin,
      giveYouUp,
      goodTime,
      pourSomeSugar,
      pumpUpJam,
      rockYou,
      rocky,
      jungle,
    ];
    const randomNum = Math.floor(Math.random() * (songs.length));
    this.setState({
      currentSong: songs[randomNum],
      play: true,
    });
  }

  stopSong() {
    this.setState({
      currentSong: '',
      play: false,
    });
  }

  render() {
    const { name, profileImg: userImage } = this.props.user;
    const { currentSong, play } = this.state;

    return (
      <article className="container avatar">
        <img src={userImage} alt="user profile" onClick={() => this.changeCurrentSong()} />
        <audio src={currentSong} type="audio/mp4" autoPlay={play} />
        <div role="alert" onClick={() => this.stopSong()}>
          <h1>{name}</h1>
        </div>
      </article>
    );
  }
}

export default Avatar;

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
  }).isRequired,
};
