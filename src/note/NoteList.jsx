export default function NoteList({ notes, dispatch }) {
  return (
    <table className="w-full text-sm">
      <thead className="bg-gray-300 text-white">
        <tr>
          <th className="px-3 py-2 text-left">Note</th>
          <th className="px-3 py-2">Name</th>
          <th className="px-3 py-2">Kelas</th>
          <th className="px-3 py-2">Done</th>
          <th className="px-3 py-2">Action</th>
        </tr>
      </thead>

      <tbody>
        {notes.map(note => (
          <tr key={note.id} className="hover:bg-gray-50">
            <td className="px-3 py-2">{note.text}</td>
            <td className="px-3 py-2 text-center">{note.name}</td>
            <td className="px-3 py-2 text-center">{note.Kelas}</td>
            <td className="px-3 py-2 text-center">
              <input
                type="checkbox"
                checked={note.done}
                onChange={e =>
                  dispatch({
                    type: "CHANGE_NOTE",
                    payload: { ...note, done: e.target.checked },
                  })
                }
              />
            </td>
            <td className="px-3 py-2 text-center">
              <button
                className="px-2 py-1 rounded text-white bg-gray-300 hover:bg-gray-600"
                onClick={() =>
                  dispatch({ type: "DELETE_NOTE", payload: note })
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
