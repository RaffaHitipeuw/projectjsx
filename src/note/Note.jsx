import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeTitle(e) {
    onChange({ ...note, title: e.target.value });
  }

  function handleChangeText(e) {
    onChange({ ...note, text: e.target.value });
  }

k  function handleChangeHARD(e) {
    onChange({ ...note, HARD: e.target.value });
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.title} onChange={handleChangeTitle} />
        <input value={note.text} onChange={handleChangeText} />
        <input value={note.HARD} onChange={handleChangeHARD} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <div>{note.title} {note.text} {note.HARD}</div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    onChange({ ...note, done: e.target.checked });
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}
