import React from 'react';
import DocumentMeta from 'react-document-meta';
 
export default class Meta extends React.Component {
  render() {
    const meta = {
      title: 'Spiegami - Cannabis',
      description: 'Gli argomenti sulla liberalizzazione della Cannabis, tema per tema',
      canonical: 'https://spiegami.github.com/cannabis',
      meta: {
        name: {
          keywords: 'spiegami,cannabis,legalizzazione'
        },
        property: {
          'og:url': "https://spiegami.github.com/cannabis",
          "og:title": 'Spiegami - Cannabis',
          "og:description": 'Gli argomenti sulla liberalizzazione della Cannabis, tema per tema',
        }
      }
    };

    //console.log(this.props) 
    return (
      <DocumentMeta {...meta} />
    );
  }
}