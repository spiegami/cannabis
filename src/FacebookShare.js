import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="fb-share-button"
        data-href="https://spiegami.github.io/cannabis"
        data-layout="button"
        data-size="large"
        data-mobile-iframe="true">
        <a className="fb-xfbml-parse-ignore"
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fspiegami.github.io%2Fcannabis&amp;src=sdkpreparse">
          Share
        </a>
      </div>
    );
  }
}
