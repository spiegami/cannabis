import React, { Component } from 'react';
import ExplainToMe from './material/ExplainToMe.js'
import ExplainTheorem from './ExplainTheorem.js'
import Theorem, { jsonToMaterial } from './Theorem.js'


const AndList = (props) => <ol>{props.val}</ol>
const OrList = (props) => <ul>{props.val}</ul>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spiegamiSI:
        {"E' giusto cambiare il ruolo e le funzioni del Senato come previsto dalla Riforma": [
          {"per ragioni storiche": {
            "perché era previsto anche dalla riforma del Titolo V del 2001": {},
            "perché non è come i Costituenti avrebbero voluto": {
              "Il Senato voluto dai nostri costituenti doveva essere rappresentativo delle Regioni ed essere molto diverso dalla Camera, per durata in carica e sistema elettorale. Ma poi, per una scelta delle maggioranze di governo, l'istituzione delle regioni venne ritardata di 22 anni, e con una riforma costituzionale venne stabilita la perfetta parità delle due Camere": {}
            }
          }},
          [
            {"perché coinvolge stabilmente le regioni": {}},
            {"coinvolgere stabilmente le regioni è buono": [{
              "coinvolgere stabilmente le regioni riduce le conflittualità e i ritardi nelle discussioni delle leggi": {
                "le regioni devono poter decidere quali siano gli interessi in gioco prima che le leggi entrino in vigore": {},
                "l'intervento delle regioni prima dell'entrata in vigore delle leggi riduce il ricorso alla Corte Costituzionale": {}
              }},
              {"coinvolgere stabilmente le regioni aumenta il tasso di democraticità del nostro sistema": {}}
            ]},
          ],
          {"perché se viene eletto diversamente dalla Camera è giusto che abbia funzioni diverse": {}},
          [
            {"perché è in linea con le esperienze di altri Paesi europei": {
              "in Europa, tutti i Senati rappresentativi delle autonomie non danno la fiducia al Governo e partecipano alla legislazione solo sulle questioni più importanti, mentre svolgono funzioni di controllo connesse con il fatto che i Senatori rappresentano le autonomie": {}
            }},
            {"questi altri Paesi europei in generale hanno funzionato bene": {}}
          ],
          {"perché il nuovo rapporto fiduciario supera i problemi derivanti da due sistemi elettorali diversi": {
            "per quanto riguarda l'Italicum, tutte le maggioranze qualificate restano o sono rafforzate": {
              "il premio di maggioranza, da solo, non permette ad un'unica forza politica di eleggere le più alte cariche dello Stato e degli organi di giustizia": {}
            },
            "una forza politica sola deve fare comunque i conti con possibili dissensi interni, pur contando su 340 seggi ": {}
          }}
        ]},
      spiegamiNO:
        {"Non è giusto cambiare il ruolo e le funzioni del Senato come previsto dalla Riforma": [
          [
            {"perché elimina un contro-potere politico esterno alla Camera": []},
            {"non compensa tale svuotamento con il rafforzamento del sindacato ispettivo": []}
          ],
          {
            "perché ci allontana da tutti gli altri esempi nel mondo":
              [
                {"La Germania ha un ordinamento federale e ogni regione costituisce uno Stato sovrano. Sono i governi delle regioni a nominare direttamente i propri senatori (da 3 a 6 a seconda della popolazione), i quali sono sottoposti a vincolo di mandato e devono votare uniformemente alle decisioni prese dalla regione. Inoltre, il Bundesrat ha potere di veto su tutta la legislazione che riguarda le competenze regionali, con enormi capacità di interdizione": [],
                "In Francia si eleggono prima 150mila \"grandi elettori\" che, a loro volta, eleggono i senatori. Inoltre, a differenza del nuovo Senato italiano, i mandati parlamentari non si possono sovrapporre a incarichi di governo a livello regionale o locale": [],
                "Nel Regno Unito, la Camera dei Lord (non elettiva) non rappresenta le istituzioni territoriali. La sua funzione è piuttosto quella di apportare modifiche di carattere tecnico alle leggi e di garantire una maggiore ponderazione delle scelte legislative, soprattutto in presenza di contrasti sociali e dissensi particolarmente forti nella società": [],
                "Il Senato degli Usa, composto da un totale di 100 senatori, ha una funzione di contrappeso a garanzia della divisione dei poteri. Tutti gli elettori degli Stati membri della Federazione eleggono 2 senatori, in elezioni separate da quelle presidenziali che si svolgono ogni due anni. Il procedimento legislativo, negli Stati Uniti, è improntato ad una forma di bicameralismo paritario": []
                }
              ]
          },
          [
            {"perché con la nuova legge elettorale, un solo partito potrà formare il Governo e ottenere la fiducia alla Camera, anche se espressione di una esigua minoranza di votanti": []},
            {"la fiducia data dalla sola Camera è controproducente":
              [
              {"non contribuisce alla stabilità": [
                {"nella storia repubblicana  il diniego della fiducia ha fatto cadere soltanto due governi (i due governi Prodi)": []}]},
              {"non contribuisce alla governabilità": [
                {"la governabilità non dipende dal numero delle camere ma dalla coesione della maggioranza": []},
                {"una maggioranza composita e frammentata non potrà mai produrre governabilità": []}]}]
          }],
          {"perché il ruolo del senato è confuso": 
            [{"rappresenta gli enti territoriali ma ha anche altre funzioni non omogenee": 
              [{"il nuovo Senato, pur diventando un organo di rappresentanza territoriale, continuerebbe ad esercitare funzioni tipiche di un organo dello Stato, quali l'esercizio della potestà di revisione costituzionale, le funzioni di raccordo tra Stato ed Unione Europea e tutte le altre funzioni previste dal quarto comma del nuovo art. 55.": []}]},
            {"obbliga i senatori a esercitare anche le funzioni di consigliere regionale o di sindaco": []}]}
         ]},
      complesso: {
    "claim": "prendo l'ombrello",
    "connector": "o",
    "reasons": [
      {
        "connector": "e",
        "reasons": [
          {
            "connector": "o",
            "reasons": [
              {"claim": "piove"},
              {"claim": "sta per piovere",
                "connector": "e",
                "reasons": [
                  {"claim": "ci sono nuvole cariche di pioggia"},
                  {"claim": "il vento sta spingendo le nuvole qui"}
                ]
              }
            ]
          },
          {"claim": "non voglio bagnarmi"}
        ]
      },
      {
        "connector": "e",
        "reasons": [
          {"claim": "devo stare al sole per ore"},
          {"claim": "non voglio scottarmi"}
        ]
      }
    ]
  },
    }
  }

  render() {
    return (
      <div>
        <br />
        {jsonToMaterial(this.state.complesso)}
        <br />
        <ExplainToMe thesis="Spiegami SI" argument={this.state.spiegamiSI} />
        <ExplainToMe thesis="Spiegami NO" argument={this.state.spiegamiNO} />
        <hr/>
      </div>
    );
  }
}

export default App;
