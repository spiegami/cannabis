import React from 'react';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';


export default class Theorem {
	constructor(claim, connector, reasons) {
		this.reasons = reasons;
		this.connector = connector;
		this.claim = claim;
	}
	get getClaim() {
		return this.claim || this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
	get preview() {
		return this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
	get human_count_or() {
		return "per " + this.reasons.length + (this.reasons.length === 1 ? " motivo" : " motivi");
	}
	get human_count_and() {
		return "per il seguente motivo, in " + this.reasons.length + (this.reasons.length === 1 ? " punto" : " punti");
	}
	get human_count_how() {
		return (this.reasons.length === 1 ? "nel seguente modo" : "nei seguenti " + this.reasons.length + " modi");
	}
}

function color_from_level(level, basecolor) {
	if (basecolor === "#E1F5FE") {
		switch(level) {
	    case 0:
	      return "#E1F5FE"
	      break;
	    case 1:
	      return "#B3E5FC"
	      break;
	    case 2:
	      return "#81D4FA"
	      break;
	    case 3:
	      return "#4FC3F7"
	      break;
	    case 4:
	      return "#29B6F6"
	      break;
	    case 5:
	      return "#03A9F4"
	      break;
	    case 6:
	      return "#039BE5"
	      break;
	    case 7:
	      return "#0288D1"
	      break;
	    case 8:
	      return "#0277BD"
	      break;
	    case 9:
	      return "#01579B"
	      break;
	    default:
	      return "#E1F5FE"
		}
	} else if (basecolor === "#F1F8E9") {
		switch(level) {
	    case 0:
	      return "#F1F8E9"
	      break;
	    case 1:
	      return "#DCEDC8"
	      break;
	    case 2:
	      return "#C5E1A5"
	      break;
	    case 3:
	      return "#AED581"
	      break;
	    case 4:
	      return "#9CCC65"
	      break;
	    case 5:
	      return "#8BC34A"
	      break;
	    case 6:
	      return "#7CB342"
	      break;
	    case 7:
	      return "#689F38"
	      break;
	    case 8:
	      return "#558B2F"
	      break;
	    case 9:
	      return "#33691E"
	      break;
	    default:
	      return "#E1F5FE"
		}
	} else {
		return "#fff"
	}
}
// style={{padding: 0}}
export function theoremToMaterial(theorem, level=0, basecolor="") {
	const bgcolor = color_from_level(level, basecolor)
	// versione 3
	if (
		theorem.reasons.length === 0 &&
		theorem.claim
	) {
		return (
			<ListItem
				style={{backgroundColor: bgcolor, fontSize: '21px', lineHeight: '1.2'}}
				key={theorem.claim}
				primaryText={theorem.claim}
				innerDivStyle={{paddingRight: 48, marginLeft: 0}}
			/>
		)
	} else if (
		theorem.reasons.length === 1 &&
		theorem.connector !== "in_che_modo" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map((t) => theoremToMaterial(t, level+1, basecolor))
		return (
			<ListItem
				key={theorem.claim}
				style={{backgroundColor: bgcolor, fontSize: '21px', lineHeight: '1.2'}}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_or}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				nestedListStyle={{paddingTop: "0px", paddingBottom: "0px"}}
				innerDivStyle={{paddingRight: 48, marginLeft: 0}}
			/>
		)
	} else if (
		theorem.connector === "o" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map((t) => theoremToMaterial(t, level+1, basecolor))
		return (
			<ListItem
				key={theorem.claim}
				style={{backgroundColor: bgcolor, fontSize: '21px', lineHeight: '1.2'}}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_or}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				nestedListStyle={{paddingTop: "0px", paddingBottom: "0px"}}
				innerDivStyle={{paddingRight: 48, marginLeft: 0}}
			/>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map((t) => theoremToMaterial(t, level+1, basecolor))
		const paperItems = listItems.map((item, index) => <Paper key={index}><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.claim}
				style={{backgroundColor: bgcolor, fontSize: '21px', lineHeight: '1.2'}}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_and}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				nestedListStyle={{paddingTop: "0px", paddingBottom: "0px"}}
//				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
				innerDivStyle={{paddingRight: 48, marginLeft: 0}}
			/>
		)
	} else if (
		theorem.connector === "in_che_modo" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map((t) => theoremToMaterial(t, level+1, basecolor))
		return (
			<ListItem
				key={theorem.claim}
				style={{backgroundColor: bgcolor, fontSize: '21px', lineHeight: '1.2'}}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_how}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				nestedListStyle={{paddingTop: "0px", paddingBottom: "0px"}}
				innerDivStyle={{paddingRight: 48, marginLeft: 0}}
			/>
		)
	} else {
		console.error("missing claim somewhere")
		return null
	}
}


function theoremToMaterial_v2(theorem) {
	// versione 2
	if (
		theorem.reasons.length === 0 &&
		theorem.claim
	) {
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
			/>
		)
	} else if (
		theorem.reasons.length === 1 &&
		theorem.connector !== "in_che_modo" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_or}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				innerDivStyle={{paddingRight: 48}}
			/>
		)
	} else if (
		theorem.connector === "o" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_or}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				innerDivStyle={{paddingRight: 48}}
			/>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item, index) => <Paper key={index}><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_and}
				primaryTogglesNestedList={true}
				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
				innerDivStyle={{paddingRight: 48}}
			/>
		)
	} else if (
		theorem.connector === "in_che_modo" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_how}
				primaryTogglesNestedList={true}
				nestedItems={listItems}
				innerDivStyle={{paddingRight: 48}}
			/>
		)
	} else {
		console.error("missing claim somewhere")
		return null
	}
}


export function theoremToMaterial_v1(theorem) {
	// versione 1
	if (theorem.reasons.length === 0) {
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
			/>
		)
	} else if (
		theorem.connector === "o" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
			<List>
				{listItems}
			</List>
		)
	} else if (
		theorem.connector === "o" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
					<ListItem
						key={theorem.claim}
						primaryText={theorem.claim}
						secondaryText={theorem.human_count_or}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
						innerDivStyle={{paddingRight: 48}}
					/>
		)
	} else if (
		theorem.connector === "e" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item) => (
			item.type === List ? 
				<Paper>{item}</Paper> :
				<Paper><List>{item}</List></Paper>
			)
		)
		return (
			<ListItem key={theorem.claim}>
				{paperItems}
			</ListItem>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item, index) => <Paper key={index}><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_and}
				primaryTogglesNestedList={true}
				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
				innerDivStyle={{paddingRight: 48}}
			/>
		)
	} else if (
		theorem.connector === "in_che_modo" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
					<ListItem
						key={theorem.claim}
						primaryText={theorem.claim}
						secondaryText={theorem.human_count_how}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
						innerDivStyle={{paddingRight: 48}}
					/>
		)
	}

}

export function jsonToTheorem(json) {
	const claim = json.claim ? json.claim : "";
	const connector = json.connector ? json.connector : "";
	const reasons = json.reasons ? json.reasons.map(jsonToTheorem) : []
	return new Theorem(claim, connector, reasons)
}

export function jsonToMaterial(json, basecolor="#fff") {
	return (
		<Paper>
			<List style={{paddingTop: "0px", paddingBottom: "0px"}}>
				{theoremToMaterial(jsonToTheorem(json), 0, basecolor)}
			</List>
		</Paper>
	)
}

export function argumentsFromTopic(topic) {
	var argomenti = {}

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index
	}
	Object.keys(topic).forEach( (tema) => {
		var argomenti_del_tema = Object.keys(topic[tema])
		argomenti_del_tema = argomenti_del_tema.map((argomento) => argomento.replace("_SI", "").replace("_NO",""))
		argomenti_del_tema = argomenti_del_tema.filter(onlyUnique)
		argomenti[tema] = argomenti_del_tema
	})
	return argomenti
}