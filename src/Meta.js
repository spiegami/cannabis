import React from 'react';
import DocumentMeta from 'react-document-meta';
 
export default class Meta extends React.Component {
  render() {
    const meta = {
      title: 'Spiegami - Referendum',
      description: 'Tutti gli argomenti del sì e del no al referendum costituzionale del 4 dicembre 2016, spiegati tema per tema',
      canonical: 'https://carlomartinucci.github.com/spiegami-referendum',
      meta: {
        name: {
          keywords: 'spiegami,referendum'
        },
        property: {
          'og:url': "https://carlomartinucci.github.com/spiegami-referendum",
          "og:title": "Spiegami il referendum",
          "og:description": "Tutti gli argomenti del sì e del no al referendum costituzionale del 4 dicembre 2016, spiegati tema per tema",
        }
      }
    };

    //console.log(this.props) 
    return (
      <DocumentMeta {...meta} />
    );
  }
}