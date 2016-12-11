import React, { Component } from 'react';
import MainAppBar from './MainAppBar.js'
import TemaToolBar from './TemaToolBar.js'
import ArgomentoToolBar from './ArgomentoToolBar.js'
import LateralMenu from './LateralMenu.js'


export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    }
  }

  handleDrawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  render() {
    let temaToolBar, argomentoToolBar
    if (this.props.tema == null) {
      temaToolBar = null
    } else {
      temaToolBar = <TemaToolBar tema={this.props.tema} argomenti={this.props.argomenti} temi={Object.keys(this.props.argomenti)}/>
    }
    if (this.props.argomento == null) {
      argomentoToolBar = null
    } else {
      argomentoToolBar = <ArgomentoToolBar argomento={this.props.argomento} argomenti={this.props.argomenti} tema={this.props.tema}/>
    }
    return (
      <div>
        <MainAppBar
          title={this.props.title}
          onCloseTouch={this.handleDrawerToggle}
        />
        {temaToolBar}
        {argomentoToolBar}
        <LateralMenu
          open={this.state.drawerOpen}
          onTouchTap={this.handleDrawerToggle}
        />
      </div>
    );
  }
}

