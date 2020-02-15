import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../js/actions/index";
import { Form } from 'react-bootstrap';

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <Form style={{}} onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            id="title"
            value={title}
            onChange={this.handleChange} />
        </Form.Group>
        {/* <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div> */}
        <button type="submit">SAVE</button>
      </Form>
    );
  }
}

const myForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default myForm;