import React, { Component } from 'react'

export default class MailChimp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: ""
    }
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangeFname(event) {
    this.setState({fname: event.target.value});
  }
  handleChangeLname(event) {
    this.setState({lname: event.target.value});
  }
  render() {
    return (
      <div className="mailchimp">
        <div id="mc_embed_signup">
          <form action="//github.us14.list-manage.com/subscribe/post?u=89c82bf74d867f3afd43ffb5c&amp;id=02bfa824d8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <h2>Spiegami - La Lista</h2>
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span></label>
                <input ref={(input) => this.input = input} type="email" value={this.state.email} onChange={this.handleChangeEmail} name="EMAIL" className="required email" id="mce-EMAIL"/>
               </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">Nome </label>
                <input ref={(input) => this.input = input} type="text" value={this.state.fname} onChange={this.handleChangeFname} name="FNAME" className="" id="mce-FNAME"/>
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Cognome </label>
                <input ref={(input) => this.input = input} type="text" value={this.state.lname} onChange={this.handleChangeLname} name="LNAME" className="" id="mce-LNAME"/>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
              </div>
              <div style={{position: 'absolute', left: -5000}} aria-hidden="true">
                <input type="text" name="b_89c82bf74d867f3afd43ffb5c_02bfa824d8" tabIndex="-1" value=""/>
              </div>
              <div className="clear">
                <input type="submit" value="Iscrivimi" name="subscribe" id="mc-embedded-subscribe" className="button"/>
              </div>
            </div>
          </form>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        <script type='text/javascript' src='./mailchimp_script.js'></script>
      </div>
    )
  }
}