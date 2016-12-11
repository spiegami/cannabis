import React, { Component } from 'react';
import Footer from './Footer.js'
import Navigation from './Navigation.js'
import { argumentsFromTopic } from "./Theorem.js"
import Meta from './Meta.js'
import Sondaggio from './Sondaggio.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      argomenti: argumentsFromTopic(props.route.referendum)
    }
  }

//        <Meta tema={this.props.params.tema} argomento={this.props.params.argomento} route={this.props.route} />
  render() {
    return (
      <div>
        <Sondaggio/>
        <Navigation argomenti={this.state.argomenti} tema={this.props.params.tema} argomento={this.props.params.argomento} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
