import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Snackbar from 'material-ui/Snackbar';
import Popover from 'material-ui/Popover';

import ActionFeedback from 'material-ui/svg-icons/action/feedback';

export default class Formspree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false,
      popoverOpen: false,
      message: "",
      type: "ready_to_send",
      email: "",
      testo: "",
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
  handleChangeTesto(event) {
    this.setState({testo: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const _this = this;
    let body = {testo: this.state.testo, email: this.state.email}
    for(var i = 0, l = this.props.hidden_fields.length; i < l; i++) {
      body[this.props.hidden_fields[i].name] = this.props.hidden_fields[i].value;
    }
    this.setState({type: "sending", snackbarOpen: true, message: "Sending message..."});
    fetch('https://formspree.io/spiegami.tutto@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(
      function(response) {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' +  
            response.status);  
          return;  
        }
        _this.setState({type: "ready_to_send", message: "Message sent!", popoverOpen: false, testo: ""})
      }  
    )
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    });
  }
  handleSnackbarRequestClose() {
    this.setState({
      snackbarOpen: false,
    });
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget,
    });
  };

  handlePopoverRequestClose() {
    this.setState({
      popoverOpen: false,
    });
  };
  
  render() {
    const hidden_fields = this.props.hidden_fields.map((hidden_field) => (
      <input key={hidden_field.name} type="hidden" name={hidden_field.name} value={hidden_field.value} />
    ))
    return (
      <span>
      <ActionFeedback onTouchTap={this.handleTouchTap.bind(this)} style={{float: 'right', cursor: 'pointer'}}/>
      <Snackbar
        open={this.state.snackbarOpen}
        message={this.state.message}
        autoHideDuration={3000}
        onRequestClose={this.handleSnackbarRequestClose.bind(this)}
      />
      <Popover
      style={{maxWidth: '350px'}}
        open={this.state.popoverOpen}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={this.handlePopoverRequestClose.bind(this)}
      >
        <form onSubmit={this.handleSubmit.bind(this)} style={{padding: '15px'}}>
          <h4 style={{textAlign: 'center'}}><span className="spiegami">Suggeriscimi</span> un miglioramento</h4>
          <p><span className="spiegami">Spiegami</span> come scrivere meglio questo ragionamento o suggeriscimi un punto da aggiungere in questo ragionamento.</p>
          <TextField id="email" type="email" name="_replyto" fullWidth floatingLabelText="La tua email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
          <br/>
          <TextField id="text" type="text" multiLine name="text" fullWidth floatingLabelText="Il tuo suggerimento" value={this.state.testo} onChange={this.handleChangeTesto.bind(this)}/>
          <br/>
          <br/>
          <RaisedButton type="submit" value="Send" label="Invia" name="invia" disabled={!this.state.canSubmit || this.state.type !== "ready_to_send"}/>
          {hidden_fields}
        </form>
      </Popover>
      </span>
    )
  }
}