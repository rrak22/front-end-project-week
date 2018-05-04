import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import NoteCard from './NoteCard'
import './ListView.css';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const username = this.props.data.username;
    console.log(username);
    axios
      .get(`https://radiant-reef-10640.herokuapp.com/api/notes/${username}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.getNotes(res.data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="listContainer">
        <h2 className="listHeader">Your Notes:</h2>
        <div className="listBody">
          {this.props.data.notes.map((note) =>
            <NoteCard key={note.id} {...note} />
          )}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps, { getNotes })(withRouter(ListView));
