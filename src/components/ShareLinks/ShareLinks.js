import React from 'react';
import logo from '../../assets/pocket-watch.png';
import './ShareLinks.css';

const ShareLinks = () =>
  (
    <article className="share-links-container">
      <img className="share-links-logo" src={logo} alt="Tempo Trainer Logo" />
      <article>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Facebook Link"
        >
          <img src={logo} alt="facebook link" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Instagram Link"
        >
          <img src={logo} alt="instagram link" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitter Link"
        >
          <img src={logo} alt="twitter link" />
        </a>
      </article>
    </article>
  );


export default ShareLinks;
