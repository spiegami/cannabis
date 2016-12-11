import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';

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
		if (this.props.thesis === "perché ho preso l'ombrello v1") {
			return (
				<Paper>
					<List>
						<Subheader>{this.props.thesis}</Subheader>
						<ListItem key={1}
							primaryText="prendo l'ombrello"
							primaryTogglesNestedList={true}
							nestedItems={[
								<ListItem key={1}
								primaryText="piove"
								/>
								]}
						/>
					</List>
				</Paper>
			)
		} else
		if (this.props.thesis === "perché ho preso l'ombrello v2") {
			return (
				<Paper>
					<List>
						<Subheader key={1}>{this.props.thesis}</Subheader>
						<ListItem key={2}
							primaryText="prendo l'ombrello"
							primaryTogglesNestedList={true}
							nestedItems={[
								<ListItem key={1}
								primaryText="piove" />,
								<Divider key={2} />,
								<ListItem key={3}
								primaryText="quando piove prendo l'ombrello"/>
							]}
						/>
					</List>
				</Paper>
			)
		}
		if (this.props.thesis === "perché ho preso l'ombrello v3") {
			return (
				<Paper>
					<List>
						<Subheader>{this.props.thesis}</Subheader>
						<ListItem key={1}
							primaryText="prendo l'ombrello"
							primaryTogglesNestedList={true}
							nestedItems={[
								<ListItem key={1}
								primaryText="piove"
								/>,
								<ListItem key={2}
								primaryText="sta per piovere"
								/>
								]}
						/>
					</List>
				</Paper>
			)
		}
		if (this.props.thesis === "perché ho preso l'ombrello v4") {
			return (
				<Paper>
					<List>
						<Subheader>{this.props.thesis}</Subheader>
						<ListItem key={1}
							primaryText="prendo l'ombrello"
							primaryTogglesNestedList={true}
							nestedItems={[
								<ListItem key={1}>
								<Paper><List>
									<Subheader>piove o sta per piovere</Subheader>
									<ListItem key={1}
									primaryText="piove"
									/>
									<ListItem key={2}
									primaryText="sta per piovere"
									/>
								</List></Paper>
								</ListItem>,
								<ListItem key={3}
								primaryText="quando piove voglio avere con me l'ombrello"
								/>
								]}
						/>
					</List>
				</Paper>
			)
		}
	  return (
	  	<Paper>
	      <List>
	      	<Subheader>{this.props.thesis}</Subheader>
	      	{this.traverse(this.props.argument)}
	      </List>
      </Paper>
	  );
	}

}

ExplainToMe.propTypes = {
	thesis: React.PropTypes.string,
	argument: React.PropTypes.object.isRequired
}