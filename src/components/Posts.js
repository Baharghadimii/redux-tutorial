import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../js/actions/index";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ListGroup >
        {this.props.articles.map(el => (
          <ListGroupItem key={el.id}>{el.title}</ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);