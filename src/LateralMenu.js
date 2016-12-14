import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';

import NavLink from './NavLink'

export default class LateralMenu extends React.Component {
  handleClose = () => setTimeout(this.props.onTouchTap, 50);
  render() {
    return (
      <div>
        <Drawer docked={false} openSecondary open={this.props.open}>
          <AppBar
            iconElementRight={<IconButton><NavigationClose /></IconButton>}
            iconElementLeft={<span/>}
            onTouchTap={this.props.onTouchTap}
          />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<NavLink to="/" onlyActiveOnIndex />}
            key="home"
            primaryText="Home"
          />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<NavLink to="/about" />}
            key="about"
            primaryText="Che cos'è"
          />
          <Divider />
        </Drawer>
      </div>
    );
  }
}