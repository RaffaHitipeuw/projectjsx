export default function NoteList({
  students,
  dispatch,
}) {
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th className="table-th text-left">
            Nama
          </th>
          <th className="table-th">
            Umur
          </th>
          <th className="table-th">
            Kelas
          </th>
          <th className="table-th">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr
            key={s.id}
            className="table-row"
          >
            <td className="table-td">
              {s.nama}
            </td>
            <td className="table-td text-center">
              {s.umur}
            </td>
            <td className="table-td text-center">
              {s.kelas}
            </td>
            <td className="table-td table-action">
              <button
                className="btn btn-edit"
                onClick={() =>
                  dispatch({
                    type: "SET_EDIT",
                    payload: s.id,
                  })
                }
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() =>
                  dispatch({
                    type: "DELETE_DATA",
                    payload: s.id,
                  })
                }
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
