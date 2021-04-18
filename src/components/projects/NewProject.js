import React, { Component } from "react";
import {StyleSheet, css} from 'aphrodite'
import {Row, Column} from 'simple-flexbox'

const styles = StyleSheet.create({
  projectForm: {
  },

});

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dateStart: "",
      dateEnd: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, dateStart, dateEnd } = this.state;
    const reqObj = {
      project: {
        title: title,
        description: description,
        dateState: dateStart,
        dateEnd: dateEnd,
      },
    };

    axios.post("http://localhost:3000/", reqObj, { withCredentials: true });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Column>
          <label>Project Title</label>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Project Title"
          />
          <label>
            Project Description
            <br />
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Project Title"
            />
          </label>
          <label>
            Start Date
            <br />
            <input
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Project Title"
            />
          </label>
          <label>
            End Date
            <br />
            <input
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Project Title"
            />
          </label>
          <label>
            Estimated Duration
            <br />
            <input
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Project Title"
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </Column>
      </form>
    );
  }
}

export default NewProject;
