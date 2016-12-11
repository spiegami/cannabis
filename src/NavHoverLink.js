import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavHoverLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }
  render() {
    function toggleHover() {
      this.setState({hover: !this.state.hover})
    }
    var linkStyle;
    if (this.state.hover) {
      linkStyle = this.props.hoverStyle || {}
    } else {
      linkStyle = this.props.notHoverStyle || {}
    }
    return <Link {...this.props} activeClassName="active" style={linkStyle} onMouseEnter={toggleHover.bind(this)} onMouseLeave={toggleHover.bind(this)}/>
  }
}
