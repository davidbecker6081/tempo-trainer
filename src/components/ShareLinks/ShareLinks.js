import React from 'react';
import PropTypes from 'prop-types';
import facebookLogo from '../../assets/facebook-logo-button.svg';
import instagramLogo from '../../assets/instagram-logo.svg';
import twitterLogo from '../../assets/twitter-logo-button.svg';
import './ShareLinks.css';

const ShareLinks = ({ display }) =>
  (
    <article className={`share-links-container ${display}`}>
      <article className="share-links-wrapper">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Facebook Link"
        >
          <img className="share-link" src={facebookLogo} alt="facebook link" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Instagram Link"
        >
          <img className="share-link" src={instagramLogo} alt="instagram link" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitter Link"
        >
          <img className="share-link" src={twitterLogo} alt="twitter link" />
        </a>
      </article>
    </article>
  );


export default ShareLinks;

ShareLinks.propTypes = {
  display: PropTypes.string.isRequired,
};
