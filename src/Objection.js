import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';

export default class Objection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimOpen: true
    }
  }

  handleChange = () => {
    this.setState({claimOpen: !this.state.claimOpen});
  };

  render() {
    return (
      <ListItem
        key={this.props.claim}
        primaryText={this.state.claimOpen ? this.props.claim : this.props.objection}
        onTouchTap={this.handleChange}
      />
    );
  }
}

