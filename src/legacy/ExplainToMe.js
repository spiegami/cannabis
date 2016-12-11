import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const AndList = (props) => <ol>{props.val}</ol>
const OrList = (props) => <ul>{props.val}</ul>


export default class ExplainToMe extends Component {
	traverse(tree) {
	  if (!tree) {
	    return ''
	  } else if (typeof(tree) === 'string') {
	    return <div>{tree}</div>
	  } else if (Array.isArray(tree)) {
	    if (tree.length === 0) {
	      return ''
	    } else if (tree.length === 1) {
	      return this.traverse(tree[0])
	    } else {
	      const acc = tree.map((el,i) => <li key={i}>{this.traverse(el)}</li>)
	      return <AndList val={acc} />
	    }
	  } else if (typeof(tree) === "object") {
	    let acc = []
	    for (var i in tree) {
	      if (tree.hasOwnProperty(i)) {
	        acc.push([this.traverse(i),this.traverse(tree[i])]);
	      }
	    }
	    const accMap = acc.map((el,i) => <li key={i}>{el[0]}{el[1]}</li>);
	    return <OrList val={accMap} />
	  }
	}

	render() {
	  return (
      <div>{this.props.thesis}<br/> {this.traverse(this.props.argument)}</div>
	  );
	}

}

ExplainToMe.propTypes = {
	thesis: React.PropTypes.string,
	argument: React.PropTypes.object.isRequired
}