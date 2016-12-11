import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavHoverLink from './NavHoverLink.js'
import NavLink from './NavLink.js'

import { humanize } from './stringHelper.js'

let genUnique = (function() {
  let count = 0;
  return function() {
    return 'id' + count++;
  }
})();

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none'
}
const titleStyle = {
  padding: '0 16px'
}

export default class TemaToolBar extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this)
  }
  updateDimensions() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth

      this.setState({width});
    }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    let wrapper_temi
    if (this.state.width > 480) {
      const temi = this.props.temi.map((tema) => (
          <NavHoverLink
            key={genUnique()}
            hoverStyle={{...linkStyle, backgroundColor: 'rgb(230, 230, 230)', color: '#000'}}
            notHoverStyle={{...linkStyle, backgroundColor: lightBaseTheme.palette.primary2Color}}
            to={`/referendum/${tema}/${this.props.argomenti[tema][0]}`}
            className={this.props.tema === tema ? 'active grey230-active' : ''}>
            <ToolbarTitle style={titleStyle} text={humanize(tema)} />
          </NavHoverLink>
        )
      )
      wrapper_temi = (
        <ToolbarGroup firstChild>
          {temi}
        </ToolbarGroup>
      )
    } else {
      const argomenti = this.props.temi.map((tema) => (
        <MenuItem key={genUnique()} primaryText={humanize(tema)}
          containerElement={<NavLink to={`/referendum/${tema}/${this.props.argomenti[tema][0]}`} />}
        />
        )
      )
      wrapper_temi = ([
        <ToolbarGroup firstChild>
          <ToolbarTitle text={humanize(this.props.tema)} style={{backgroundColor: 'rgba(0,0,0,0.2)', color: '#000', paddingLeft: '16px', maxWidth: 'calc(100vw - 150px)'}} />
          <IconMenu
            iconButtonElement={
              <IconButton touch>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            {argomenti}
          </IconMenu>
        </ToolbarGroup>
        ])
    }

    return (
      <Toolbar style={{backgroundColor: lightBaseTheme.palette.primary2Color}}>
        {wrapper_temi}
      </Toolbar>
    )
  }
};
