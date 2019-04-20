import React from 'react';
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import Page from 'components/Page';

class StockPage extends React.Component {

  render() {
    console.log("Params", this.props.match.params.stockquote);
    return(
      <Page
        title="Stock"
        breadcrumbs={[{ name: 'Stock', active: true }]}
      > 

      </Page>
    );
  };


}

export default StockPage;