import React, { Component } from 'react';
import { Link } from 'react-router'
import MailChimp from './MailChimp2.js'
//import Formspree from './Formspree.js'
//import FacebookShare from "./FacebookShare.js"

//      <div className="text-center fb-share" style={{marginTop: '30px'}}><FacebookShare/></div>
export default class Footer extends Component {
  render() {
    const hidden_fields = [{name: "nome", value: "valore"}]

    return (
      <div>
      <MailChimp />

      <div className="footer">
        <p><span className="spiegami">Spiegami</span>&trade; 2016</p>
        <p>
          Pensato con amore da <Link to="/about">Carlo Martinucci</Link><br/>
          con il <Link to="/about">contributo</Link> e l'aiuto di tanti amici.
        </p>
        <p>
          Materiale sul referendum tratto da<br/>
          <a href="http://www.referendumcostituzionale2016.it/" target="_blank">referendumcostituzionale2016.it</a>
        </p>
      </div>
      </div>
    );
  }
}
