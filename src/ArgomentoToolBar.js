import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
//import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
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
  textDecoration: 'none',
}
const titleStyle = {
  padding: '0 16px',
  fontSize: '18px',
  lineHeight: '48px',
}

export default class ArgomentoToolBar extends Component {
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
    let wrapper_argomenti
    if (this.state.width > 1040) {
      const argomenti = this.props.argomenti[this.props.tema].map((argomento) => (
            <NavHoverLink
              key={genUnique()}
              className="white-active"
              hoverStyle={{...linkStyle, backgroundColor: '#fff'}}
              notHoverStyle={{...linkStyle, backgroundColor: 'rgb(230, 230, 230)'}}
              to={`/referendum/${this.props.tema}/${argomento}`}>
              <ToolbarTitle style={titleStyle} text={humanize(argomento)} />
            </NavHoverLink>
        )
      )
      wrapper_argomenti = (
        <ToolbarGroup firstChild>
          {argomenti}
        </ToolbarGroup>
      )
    } else {
      const argomenti = this.props.argomenti[this.props.tema].map((argomento) => (
        <MenuItem key={genUnique()} primaryText={humanize(argomento)}
          containerElement={<NavLink to={`/referendum/${this.props.tema}/${argomento}`} />}
        />
        )
      )

      wrapper_argomenti = ([
        <ToolbarGroup firstChild>
          <ToolbarTitle text={humanize(this.props.argomento)} style={{fontSize: '18px', lineHeight: '48px', backgroundColor: 'rgba(0,0,0,0.2)', color: '#000', paddingLeft: '16px', maxWidth: 'calc(100vw - 150px)'}} />
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
      <Toolbar style={{backgroundColor: 'rgb(230, 230, 230)', height: '48px'}}>
        {wrapper_argomenti}
      </Toolbar>
    )
  }
};
