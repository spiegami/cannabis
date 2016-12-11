import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionFeedback from 'material-ui/svg-icons/action/feedback';

import NavLink from './NavLink'

export default class LateralMenu extends React.Component {
  handleClose = () => setTimeout(this.props.onTouchTap, 50);
  render() {
    return (
      <div>
        <Drawer docked={false} openSecondary open={this.props.open}>
          <AppBar
            iconElementRight={<IconButton><NavigationClose /></IconButton>}
            iconElementLeft={<span/>}
            onTouchTap={this.props.onTouchTap}
          />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<NavLink to="/" onlyActiveOnIndex />}
            key="home"
            primaryText="Home"
          />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<NavLink to="/about" />}
            key="about"
            primaryText="Che cos'è"
          />
          <Divider />
          <ListItem
            key="senato"
            primaryText="Senato"
            primaryTogglesNestedList
            open
            nestedItems={[
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/senato/ruolo_e_funzioni" />}
                key="ruolo_e_funzioni"
                primaryText="Ruolo e funzioni"
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/senato/modalità_di_elezione" />}
                key="modalità_di_elezione"
                primaryText="Modalità di elezione"
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/senato/il_procedimento_legislativo" />}
                key="il_procedimento_legislativo"
                primaryText="Il procedimento legislativo"
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/senato/diritti_dei_senatori_e_statuto_delle_minoranze" />}
                key="diritti_dei_senatori_e_statuto_delle_minoranze"
                primaryText="I diritti dei senatori"
              />
            ]}
          />
          <Divider />
          <ListItem
            key="stato-regioni"
            primaryText="Rapporto Stato - Regioni"
            primaryTogglesNestedList
            nestedItems={[
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/stato-regioni/conflitti_di_competenza" />}
                key="conflitti_di_competenza"
                primaryText="Conflitti di competenza"
                rightIcon={<ActionFeedback/>}
              />
            ]}
          />
          <Divider />
          <ListItem
            key="altro"
            primaryText="Altre questioni"
            primaryTogglesNestedList
            nestedItems={[
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/altro/formulazione_e_discussione_dei_decreti_legge" />}
                key="decreti_legge"
                primaryText="Decreti legge"
                rightIcon={<ActionFeedback/>}
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/altro/garanzie" />}
                key="garanzie"
                primaryText="Garanzie"
                rightIcon={<ActionFeedback/>}
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/altro/iniziativa_popolare" />}
                key="iniziativa_popolare"
                primaryText="Iniziativa popolare"
                rightIcon={<ActionFeedback/>}
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/altro/semplificazione_istituzionale" />}
                key="semplificazione_istituzionale"
                primaryText="Semplificazione"
                rightIcon={<ActionFeedback/>}
              />
            ]}
          />
          <Divider />
          <ListItem
            key="oltre_il_merito"
            primaryText="Oltre il merito"
            primaryTogglesNestedList
            nestedItems={[
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/oltre_il_merito/riforma_storica_o_conservatrice" />}
                key="riforma_storica_o_conservatrice"
                primaryText="Riforma storica o conservatrice"
                rightIcon={<ActionFeedback/>}
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/oltre_il_merito/rischi_per_la_democrazia" />}
                key="rischi_per_la_democrazia"
                primaryText="Rischi per la democrazia"
                rightIcon={<ActionFeedback/>}
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/oltre_il_merito/il_metodo" />}
                key="il_metodo"
                primaryText="Il metodo"
                rightIcon={<ActionFeedback/>}
              />,
              <MenuItem
                onTouchTap={this.handleClose}
                containerElement={<NavLink to="/referendum/oltre_il_merito/questioni_politiche" />}
                key="questioni_politiche"
                primaryText="Questioni politiche"
                rightIcon={<ActionFeedback/>}
              />
            ]}
          />
          <Divider />
        </Drawer>
      </div>
    );
  }
}