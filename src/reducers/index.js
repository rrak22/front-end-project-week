import { addNote, editNote, deleteNote, login } from '../actions';

const initialState = {
  username: '',
  email: '',
  notes: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'getNotes':
      console.log(action.notes);
      return { ...state, notes: action.notes.map((note, index) => {note.id = index; return note;}) }
    case 'login':
      return { ...state, username: action.username, email: action.email }
    case 'addNote':
      return { ...state, notes: [...state.notes, action.note], nextid: state.nextid + 1 };
    case 'editNote':
      return { ...state, notes: state.notes.map(obj => obj.id === action.note.id ? obj = action.note : obj) };
    case 'deleteNote':
      return { ...state, notes: state.notes.filter(obj => obj.id !== action.id).map((obj, i) => { obj.id = i; return obj; }), nextid: state.nextid - 1 };
    default:
      return state;
    }
};
