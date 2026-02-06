import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn HTML", name: "Eko", Kelas: 1, done: false },
  { id: id++, text: "Learn CSS", name: "Eko", Kelas: 2, done: false },
];

function reducer(notes, action) {
  switch (action.type) {
    case "ADD_NOTE":
      notes.push({
        id: id++,
        text: action.payload.text,
        name: action.payload.name,
        Kelas: action.payload.Kelas,
        done: false,
      });
      return;

    case "CHANGE_NOTE": {
      const idx = notes.findIndex(n => n.id === action.payload.id);
      if (idx !== -1) notes[idx] = action.payload;
      return;
    }

    case "DELETE_NOTE":
      return notes.filter(n => n.id !== action.payload.id);

    default:
      return;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(reducer, initialNotes);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Note App</h2>

      <NoteForm dispatch={dispatch} />

      <NoteList notes={notes} dispatch={dispatch} />
    </div>
  );
}
