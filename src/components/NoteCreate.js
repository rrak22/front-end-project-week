import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import './NoteCreate.css';

class NoteCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteBody: '',
      id: props.data.nextid,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleAdd(event) {
    event.preventDefault();
    let { noteTitle, noteBody, id} = this.state;
    if (noteTitle && noteBody !== '') {
      this.props.addNote(noteTitle, noteBody, id);
      this.props.history.push('/notes');
    } else {
      alert('Fields must not be empty!');
    }
  }

  render() {
    return (
      <div className="noteCreateContainer">
        <h2 className="noteCreateHeader">Create New Note:</h2>
        <div className="formContainer">
          <input onChange={this.handleInput} type="text" name="noteTitle" className="noteTitle" placeholder="Note Title"></input>
          <br />
          <textarea onChange={this.handleInput} name="noteBody" className="noteBody" placeholder="Note Content"></textarea>
          <br />
        </div>
        <button className="noteCreateButton" onClick={this.handleAdd}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps, { addNote })(withRouter(NoteCreate));
