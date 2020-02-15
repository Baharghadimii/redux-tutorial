import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../js/actions/index";
import { Form, Button } from 'react-bootstrap';

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
    if (title === "") {
      return null;
    }
    this.props.addArticle({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <Form style={{ width: '50%', margin: '0 auto', textAlign: 'center' }} onSubmit={this.handleSubmit} required>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            id="title"
            value={title}
            onChange={this.handleChange} />
        </Form.Group>
        <Button style={{ width: '50%' }} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const myForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default myForm;