import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>Ti spiego <span className="spiegami">Spiegami</span></h1>
        <h4>Che cos'è <span className="spiegami">Spiegami</span> il Referendum</h4>
        <p><span className="spiegami">Spiegami</span> il Referendum è una piattaforma di analisi delle motivazioni del sì e del no al referendum costituzionale del 4 dicembre 2016. È composto di molti argomenti (il ruolo e le funzioni del Senato, i conflitti di competenza tra Stato e Regioni, ...) raggruppati per comodità in quattro temi (Senato, Rapporto Stato - Regioni, Altre questioni, Oltre il merito). Ogni argomento contiene un teorema per il SI' e un teorema per il NO.</p>

        <h4>Il cuore di <span className="spiegami">Spiegami</span>: i teoremi</h4>
        <p>I teoremi sono il cuore di <span className="spiegami">Spiegami</span>. Ogni teorema è formato da una tesi e dalle sue ragioni, che sono ordinate in maniera gerarchica formando una struttura ad albero, dove ogni livello inferiore contiene le ragioni del nodo superiore. Questa struttura fa sì che siano sempre evidenti i passaggi del ragionamento.</p>

        <h4>Ma un teorema non esprime la verità? Come fanno a esserci due teoremi che dicono uno il contrario dell'altro?</h4>
        <p>Un teorema è vero se le sue premesse lo sono e se i passaggi logici sono tutti corretti! <span className="spiegami">Spiegami</span> non vuole stabilire definitivamente la verità o la falsità delle affermazioni (siamo ambiziosi ma non folli!). <span className="spiegami">Spiegami</span> serve per spiegare dei ragionamenti.</p>

        <h4>Qual è il guadagno?</h4>
        <p>La chiarezza: è molto più facile ragionare un pezzetto alla volta piuttosto che con un unico blocco di testo. È più facile rispondere alla domanda "perché?" se i ragionamenti sono già disposti secondo la loro struttura logica.</p>

        <h4>Ma non stiamo complicando inutilmente le cose?</h4>
        <p>Al contrario. Ogni ragionamento ben fatto è composto di premesse e conclusioni, e fornisce delle ragioni per le proprie affermazioni. <span className="spiegami">Spiegami</span> mira a rendere evidente questa struttura per rendere più semplice ragionare meglio. Certo, ragionare richiede uno sforzo. Ma ragionare con <span className="spiegami">Spiegami</span> è più efficace che ragionare senza.</p>

        <h4>Quali sono le prospettive future di <span className="spiegami">Spiegami</span>?</h4>
        <p><span className="spiegami">Spiegami</span> è una piattaforma per l'esplorazione e lo sviluppo di ragionamenti. Per il momento c'è solo la parte di esplorazione di alcuni teoremi relativi al Referendum Costituzionale. In prospettiva, vogliamo scegliere nuovi temi da analizzare, implementare un sistema di obiezioni e un sistema di ricerca funzionale (questo sarà un punto chiave!), rendere possibile ad un gruppo di editors di aggiungere nuovi teoremi, per poi estendere questa possibilità a chiunque. E mille altre cose per rendere l'esperienza di <span className="spiegami">Spiegami</span> accessibile e fruibile: dalla lettura ad alta voce dei ragionamenti (per chi non può leggere perché impossibilitato o perché sta guidando o cucinando) al suggerimento di ragionamenti interessanti per ogni utente, in base alle preferenze espresse.</p>

        <h4>Ma quindi è tipo un social network?</h4>
        <p>Più che altro un "theorem network"! <span className="spiegami">Spiegami</span> è incentrato sugli argomenti, non sulle discussioni. Al centro non ci sono i battibecchi personali, ma le ragioni, punto per punto.</p>

        <h4>Ma quindi è tipo un forum?</h4>
        <p>I blocchi di testo di un forum non sono riutilizzabili: una risposta anche lunghissima e dettagliata dopo tre settimane sarà persa e sepolta, e se ne avessi bisogno nuovamente dovrei tornare a cercarmela e fare copia-incolla. <span className="spiegami">Spiegami</span> invece è pensato per essere modulare, e interi teoremi possono essere riutilizzati laddove siano pertinenti.</p>

        <h4>Ma quindi è tipo Wikipedia?</h4>
        <p>Wikipedia ha una sola voce per ogni argomento. <span className="spiegami">Spiegami</span> invece vuole essere plurale e permettere che emergano le migliori argomentazioni fornite da una molteplicità di prospettive diverse.</p>

        <h4>Mi hai convinto. Posso collaborare?</h4>
        <p>Certamente! <span className="spiegami">Spiegami</span> può avere successo solo a patto che ci sia un numero sufficiente di persone intellettualmente oneste e convinte della bontà del progetto. Puoi contattarmi tramite email (carlo punto martinucci chiocciola gmail punto com). Benvenuto a bordo!</p>

        <h4>Collaboratori</h4>
        <p>
            Costanza<br/>
            Michele<br/>
            Maria Cristina
        </p>
      </div>
    )
  }
}
