import React, { Component } from 'react';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';


export default class Theorem {
	constructor(claim, connector, reasons) {
		this.reasons = reasons;
		this.connector = connector;
		this.claim = claim;
		this.uniqueKey = Math.floor(Math.random()*1000000000000000)
	}
	get getClaim() {
		return this.claim || this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
	get preview() {
		return this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
}

export function theoremToMaterialOld(theorem) {
	if (theorem.reasons.length === 0) {
		return <ListItem
			key={theorem.uniqueKey}
			primaryText={theorem.claim}
		/>
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
			<Paper>
				<List>
					<ListItem
						key={theorem.uniqueKey}
						primaryText={theorem.claim}
						secondaryText={theorem.preview}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
					/>
				</List>
			</Paper>
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
			<ListItem key={theorem.uniqueKey}>
				{paperItems}
			</ListItem>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item) => <Paper><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.uniqueKey}
				primaryText={theorem.claim}
				secondaryText={theorem.preview}
				primaryTogglesNestedList={true}
				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
			/>
		)
	}
}


export function theoremToMaterial(theorem) {
	if (theorem.reasons.length === 0) {
		return (
					<ListItem
						key={theorem.uniqueKey}
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
						key={theorem.uniqueKey}
						primaryText={theorem.claim}
						secondaryText={theorem.preview}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
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
			<ListItem key={theorem.uniqueKey}>
				{paperItems}
			</ListItem>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item) => <Paper><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.uniqueKey}
				primaryText={theorem.claim}
				secondaryText={theorem.preview}
				primaryTogglesNestedList={true}
				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
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

export function jsonToMaterialOld(json) {
	return theoremToMaterialOld(jsonToTheorem(json))
}

export function jsonToMaterial(json) {
	return (
		<Paper>
			<List>
				{theoremToMaterial(jsonToTheorem(json))}
			</List>
		</Paper>
	)
}
