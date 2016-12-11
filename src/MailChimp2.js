import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

export default class MailChimp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      canSubmit: false
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      canSubmit: this.validateEmail(event.target.value)
    });
  }
  handleChangeFname(event) {
    this.setState({fname: event.target.value});
  }
  handleChangeLname(event) {
    this.setState({lname: event.target.value});
  }
  
  render() {
    return (
      <div className="mailchimp" style={{backgroundColor: lightBaseTheme.palette.primary2Color}}>
        <form action="//github.us14.list-manage.com/subscribe/post?u=89c82bf74d867f3afd43ffb5c&amp;id=02bfa824d8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
            <input type="text" name="b_89c82bf74d867f3afd43ffb5c_02bfa824d8" tabIndex="-1" value=""/>
          </div>
          <h4><span className="spiegami">Spiegami</span> la lista</h4>
          <TextField
            id="mce-EMAIL"
            name="EMAIL"
            type="email"
            floatingLabelText="Email"
            value={this.state.email}
            onChange={this.handleChangeEmail.bind(this)}
          />
          &nbsp;
          <TextField
            id="mce-FNAME"
            name="FNAME"
            type="text"
            floatingLabelText="Nome"
            value={this.state.fname}
            onChange={this.handleChangeFname.bind(this)}
          />
          &nbsp;
          <TextField
            id="mce-LNAME"
            name="LANEM"
            type="text"
            floatingLabelText="Cognome"
            value={this.state.lname}
            onChange={this.handleChangeLname.bind(this)}
          />
          <p>Iscriviti alla newsletter per ricevere solo gli aggiornamenti importanti. Astenersi perditempo. :)</p>
          <RaisedButton
            type="submit"
            label="Iscrivimi"
            name="subscribe"
            disabled={!this.state.canSubmit}
          />
        </form>
        <script type='text/javascript' src='./mailchimp_script.js'></script>
      </div>
    )
  }
}