import React from 'react';
import {
  Form,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
  }

  render() {
    return (
        <Form className="search-form" onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input
              id="searchTerm"
              type="text"
              bsSize="sm"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <InputGroupAddon addonType="append">
              <Button className="search-form-button" size="sm"><FontAwesomeIcon icon="search"></FontAwesomeIcon></Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
    );
  }
}

export default SearchForm;
