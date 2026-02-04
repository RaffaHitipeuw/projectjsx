export default function NoteList({
  students,
  dispatch,
}) {
  return (
    <table className="w-full text-sm">
      <thead className="bg-gray-300 text-white">
        <tr>
          <th className="border border-transparent px-3 py-2 text-left">
            Nama
          </th>
          <th className="border px-3 py-2">
            Umur
          </th>
          <th className="border px-3 py-2">
            Kelas
          </th>
          <th className="border px-3 py-2">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr
            key={s.id}
            className="hover:bg-gray-50"
          >
            <td className="px-3 py-2">
              {s.nama}
            </td>
            <td className="px-3 py-2 text-center">
              {s.umur}
            </td>
            <td className="px-3 py-2 text-center">
              {s.kelas}
            </td>
            <td className="px-3 py-2 flex gap-2 justify-center">
              <button
                className="px-2 py-1 rounded text-white bg-gray-300 hover:bg-gray-600"
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
                className=" px-2 py-1 rounded text-white bg-gray-300 hover:bg-gray-600"
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
