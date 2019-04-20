import React from 'react';

import { 
  setSearch
} from '../actions/search';

import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

import { withRouter, Link, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Page from 'components/Page';
import Loading from 'components/Loading';

class SearchPage extends React.Component {

  render() {
    const { searchResult, searchDetails, isFetching } = this.props;
    return (
      <Page
        title="Search"
        breadcrumbs={[{ name: 'Search', active: true }]}
      >
        <Row>
          {searchResult.map((title, index) => (
            <Col key={index} md={4} sm={4} xs={12} className="mb-3">
              <Card
                inverse
                className={`border-0 bg-gradient-theme`}
              >
                <CardBody className="d-flex flex-column justify-content-start align-items-start">
                  <CardTitle>{title}</CardTitle>
                  { isFetching ? (<Loading />) :
                    <CardText>Description: {(searchDetails[title]) ? searchDetails[title].description : " "}</CardText>
                  }
                  </CardBody>

                <CardBody className="d-flex justify-content-between align-items-center">
                  {!isFetching &&
                    <Button outline color="light" onClick={() => this.props.history.push(`/stock/${title}`)}>
                      Click
                    </Button>
                  }
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Page>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  searchResult: state.search.searchTitles,
  searchDetails: state.search.searchDetails,
  isFetching: state.search.isFetching
})

export default withRouter(connect(mapStateToProps, {
  setSearch
})(SearchPage))