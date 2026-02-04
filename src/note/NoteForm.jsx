import { useEffect, useState } from "react";

export default function NoteForm({
  dispatch,
  editingId,
  students,
}) {
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    kelas: "",
  });

  useEffect(() => {
    if (editingId) {
      const student = students.find(
        (s) => s.id === editingId
      );
      if (student) {
        setForm(student);
      }
    }
  }, [editingId, students]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nama || !form.umur || !form.kelas) return;

    dispatch({
      type: editingId ? "EDIT_DATA" : "ADD_DATA",
      payload: editingId
        ? { id: editingId, ...form }
        : { id: Date.now(), ...form },
    });

    setForm({ nama: "", umur: "", kelas: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6"
    >
      <input
        className="border rounded px-3 py-2 w-full"
        placeholder="Nama"
        value={form.nama}
        onChange={(e) =>
          setForm({ ...form, nama: e.target.value })
        }
      />
      <input
        type="number"
        className="border rounded px-3 py-2 w-24"
        placeholder="Umur"
        value={form.umur}
        onChange={(e) =>
          setForm({ ...form, umur: e.target.value })
        }
      />
      <input
        className="border rounded px-3 py-2 w-28"
        placeholder="Kelas"
        value={form.kelas}
        onChange={(e) =>
          setForm({ ...form, kelas: e.target.value })
        }
      />
      <button
        className={`px-4 py-2 rounded text-white ${
          editingId
            ? "bg-gray-300 hover:bg-gray-600"
            : "bg-gray-300 hover:bg-gray-600"
        }`}
      >
        {editingId ? "Update" : "Tambah"}
      </button>
    </form>
  );
}
