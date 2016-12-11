import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="fb-share-button"
        data-href="https://carlomartinucci.github.io/spiegami-referendum"
        data-layout="button"
        data-size="large"
        data-mobile-iframe="true">
        <a className="fb-xfbml-parse-ignore"
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcarlomartinucci.github.io%2Fspiegami-referendum&amp;src=sdkpreparse">
          Share
        </a>
      </div>
    );
  }
}
