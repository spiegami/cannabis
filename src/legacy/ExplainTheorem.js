import React, { Component } from 'react';

import Theorem, { theoremToMaterial, jsonToTheorem, jsonToMaterial, jsonToMaterialAlt } from './Theorem.js'

import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import { theorems, zero, uno, due, tre, quattro } from './theorems.json'

export default class ExplainTheorem extends Component {
  constructor(props) {
    super(props);
		const complesso =
		new Theorem("prendo l'ombrello", "o", [
			new Theorem("", "e", [
				new Theorem("", "o", [
					new Theorem("piove", "", []),
					new Theorem("sta per piovere", "e", [
						new Theorem("ci sono nuvole cariche di pioggia", "", []),
						new Theorem("il vento sta spingendo le nuvole qui", "", [])
					])
				]),
				new Theorem("non voglio bagnarmi", "", [])
			]),
			new Theorem("", "e", [
				new Theorem("devo stare al sole per ore", "", []),
				new Theorem("non voglio scottarmi", "", [])
			])
		])

    this.state = {
    	complesso: complesso
  	}
	}


	render() {
		const render_from_theorem = theoremToMaterial(this.state.complesso)
		const render_complesso = 
			<Paper>
				<List>
					<ListItem key={1}
					primaryText={this.state.complesso.claim}
					secondaryText={this.state.complesso.preview}
					primaryTogglesNestedList={true}
					nestedItems={[
						<ListItem key={1}>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="piove" />
									<ListItem key={2}
										primaryText="sta per piovere"
										secondaryText="ci sono nuvole cariche di pioggia e il vento sta spingendo le nuvole qui"
										primaryTogglesNestedList={true}
										nestedItems={[
											<ListItem key={1}>
												<Paper>
													<List>
														<ListItem key={1}
															primaryText="ci sono nuvole cariche di pioggia" />
													</List>
												</Paper>
												<Paper>
													<List>
														<ListItem key={1}
															primaryText="il vento sta spingendo le nuvole qui" />
													</List>
												</Paper>
											</ListItem>
										]}
									/>
								</List>
							</Paper>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="non voglio bagnarmi" />
								</List>
							</Paper>
						</ListItem>,
						<ListItem key={2}>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="devo stare al sole per ore" />
								</List>
							</Paper>
							<Paper>
								<List>
									<ListItem key={1}
										primaryText="non voglio scottarmi" />
								</List>
							</Paper>
						</ListItem>
					]} />
				</List>
			</Paper>
		const render_zero =
			<Paper>
				<List>
					<ListItem key="prendo l'ombrello"
						primaryText="prendo l'ombrello"
					/>
				</List>
			</Paper>
		const render_uno = 
			<Paper>
				<List>
					<ListItem key="prendo l'ombrello"
						primaryText="prendo l'ombrello"
						secondaryText="piove"
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem key="piove"
								primaryText="piove"
							/>
						]} />
				</List>
			</Paper>
		const render_due =
			<Paper>
				<List>
					<ListItem key="prendo l'ombrello"
						primaryText="prendo l'ombrello"
						secondaryText="piove e quando piove prendo l'ombrello"
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem>
								<Paper>
									<List>
										<ListItem key="piove"
											primaryText="piove"
										/>
									</List>
								</Paper>
								<Paper>
									<List>
										<ListItem key="quando piove prendo l'ombrello"
											primaryText="quando piove prendo l'ombrello"
										/>
									</List>
								</Paper>
							</ListItem>
						]} />
				</List>
			</Paper>
		const render_tre =
			<Paper>
				<List>
					<ListItem key="prendo l'ombrello"
						primaryText="prendo l'ombrello"
						secondaryText="piove o sta per piovere"
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem key="piove"
								primaryText="piove"
							/>,
							<ListItem key="sta per piovere"
								primaryText="sta per piovere"
							/>
						]} />
				</List>
			</Paper>
		const render_quattro =
			<Paper>
				<List>
					<ListItem key="prendo l'ombrello"
						primaryText="prendo l'ombrello"
						secondaryText="piove o sta per piovere e quando piove prendo l'ombrello"
						primaryTogglesNestedList={true}
						nestedItems={[
							<ListItem>
								<Paper>
									<List>
										<ListItem key="piove"
											primaryText="piove"
										/>
										<ListItem key="sta per piovere"
											primaryText="sta per piovere"
										/>
									</List>
								</Paper>
								<Paper>
									<List>
										<ListItem key="quando piove prendo l'ombrello"
											primaryText="quando piove prendo l'ombrello"
										/>
									</List>
								</Paper>
							</ListItem>
						]} />
				</List>
			</Paper>
		
		return (
			<div>
			jsonToMaterial:
			{jsonToMaterial(zero)}
			<br />
			jsonToMaterialAlt:
			{jsonToMaterialAlt(zero)}
			<br />
			manually:
			{render_zero}
			<br/>
			<hr />
			<br />
			jsonToMaterial:
			{jsonToMaterial(uno)}
			<br />
			jsonToMaterialAlt:
			{jsonToMaterialAlt(uno)}
			<br />
			manually:
			{render_uno}
			<br/>
			<hr />
			<br />
			jsonToMaterial:
			{jsonToMaterial(due)}
			<br />
			jsonToMaterialAlt:
			{jsonToMaterialAlt(due)}
			<br />
			manually:
			{render_due}
			<hr />
			<br />
			<br/>
			jsonToMaterial:
			{jsonToMaterial(tre)}
			<br />
			jsonToMaterialAlt:
			{jsonToMaterialAlt(tre)}
			<br/>
			manually:
			{render_tre}
			<br />
			<hr />
			<br/>
			jsonToMaterial:
			{jsonToMaterial(quattro)}
			<br />
			jsonToMaterialAlt:
			{jsonToMaterialAlt(quattro)}
			<br/>
			manually:
			{render_quattro}
			<br />
			<hr />
			<br/>
			jsonToMaterial:
			{jsonToMaterial(theorems)}
			<br />
			jsonToMaterialAlt:
			{jsonToMaterialAlt(theorems)}
			<br/>
			manually:
			{render_complesso}
			</div>
		)
	}
}