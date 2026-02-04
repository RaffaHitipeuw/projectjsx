import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const initialState = {
  students: [],
  editingId: null,
};

function reducer(draft, action) {
  switch (action.type) {
    case "ADD_DATA":
      draft.students.push(action.payload);
      return;
    case "DELETE_DATA":
      draft.students = draft.students.filter(
        (s) => s.id !== action.payload
      );
      return;
    case "SET_EDIT":
      draft.editingId = action.payload;
      return;
    case "EDIT_DATA": {
      const idx = draft.students.findIndex(
        (s) => s.id === action.payload.id
      );
      if (idx !== -1) {
        draft.students[idx] = action.payload;
      }
      draft.editingId = null;
      return;
    }
    default:
      return;
  }
}

export default function NoteApp() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">
        data santri
      </h2>

      <NoteForm
        dispatch={dispatch}
        editingId={state.editingId}
        students={state.students}
      />

      <NoteList
        students={state.students}
        dispatch={dispatch}
      />
    </div>
  );
}
