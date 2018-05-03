export const getNotes = (notes) => ({
  type: 'getNotes',
  notes: notes,
});

export const login = (username, email) => ({
  type: 'login',
  username: username,
  email: email,
});

export const addNote = (title, body, id) => ({
  type: 'addNote',
  note: {
    title: title,
    body: body,
    id: id,
  }
});

export const editNote = (title, body, id) => ({
  type: 'editNote',
  note: {
    title: title,
    body: body,
    id: id,
  }
});

export const deleteNote = (id) => ({
  type: 'deleteNote',
  id: id,
});
