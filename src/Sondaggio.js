import React, { Component } from 'react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6


export default class Sondaggio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            first_time: true
        }
    }
    timer(_this) {
        setTimeout(function(){
            _this.setState({visible: true, first_time: false})
        }, 1000)
    }
  render() {
    if (this.state.first_time) {
        const _this = this
        this.timer(_this)
    }
    let bar
    if (this.state.visible) {
        bar = (
                <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfd9vibxT9clJyVB25ZRLJHtAzDwE339NaJSkjFmP4fx_wTgw/viewform"
                target="_blank"
                className="sondaggio-cta"
                style={{display: "inline-block", width: "calc(100% - 38px)"}}>
                <h4 style={{color: lightBaseTheme.palette.accent1Color, lineHeight: "38px", margin: "0"}}>
                    <span style={{backgroundColor: 'white', borderRadius: "0px", padding: "10px"}}>
                        Fai il sondaggio e scegli il prossimo tema!
                    </span>
                </h4>
              </a>
              <div style={{ display: "inline-block", width: '38px', textAlign: 'center', cursor: 'pointer' }} onTouchTap={()=> this.setState({visible: false})}>
                <h4 style={{color: lightBaseTheme.palette.accent1Color, lineHeight: "38px", margin: "0"}}>
                <span style={{backgroundColor: 'white', borderRadius: "0px", padding: "10px"}}>
                    X
                </span>
                </h4>
            </div>
              </div>
            )
    } else {
        bar = ""
    }

    return (
        <ReactCSSTransitionGroup
          transitionName="sondaggiobar"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {bar}
        </ReactCSSTransitionGroup>
        
    )
  }
}
