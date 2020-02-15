import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (

  <ListGroup style={{ width: '50%', margin: '0 auto' }} className="list">
    {articles.map(el => (
      <ListGroupItem key={el.id}>{el.title}</ListGroupItem>
    ))}
  </ListGroup>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;