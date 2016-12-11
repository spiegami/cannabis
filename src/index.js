import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import {
//   cyan500, cyan700,
//   pinkA200,
//   grey100, grey300, grey400, grey500,
//   white, darkBlack, fullBlack,
// } from '../colors';
// import {fade} from '../../utils/colorManipulator';
// import spacing from '../spacing';

// export default {
//   spacing: spacing,
//   fontFamily: 'Roboto, sans-serif',
//   palette: {
//     primary1Color: cyan500,
//     primary2Color: cyan700,
//     primary3Color: grey400,
//     accent1Color: pinkA200,
//     accent2Color: grey100,
//     accent3Color: grey500,
//     textColor: darkBlack,
//     alternateTextColor: white,
//     canvasColor: white,
//     borderColor: grey300,
//     disabledColor: fade(darkBlack, 0.3),
//     pickerHeaderColor: cyan500,
//     clockCircleColor: fade(darkBlack, 0.07),
//     shadowColor: fullBlack,
//   },
// };

import App from './App.js';
import Home from './Home.js'
import About from './About.js'
import Argomento from './Argomento.js'

import { referendum } from './theorems.json'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
      <Route path="/" referendum={referendum} component={App}>
      	<IndexRedirect to="/home" />
      	<Route path="/home" referendum={referendum} component={Home} />
      	<Route path="/referendum/:tema/:argomento" referendum={referendum} component={Argomento} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
