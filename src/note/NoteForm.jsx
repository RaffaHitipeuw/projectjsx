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
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-input"
        placeholder="Nama"
        value={form.nama}
        onChange={(e) =>
          setForm({ ...form, nama: e.target.value })
        }
      />
      <input
        type="number"
        className="form-input form-umur"
        placeholder="Umur"
        value={form.umur}
        onChange={(e) =>
          setForm({ ...form, umur: e.target.value })
        }
      />
      <input
        className="form-input form-kelas"
        placeholder="Kelas"
        value={form.kelas}
        onChange={(e) =>
          setForm({ ...form, kelas: e.target.value })
        }
      />
      <button
        className={`form-button ${
          editingId ? "btn-edit" : "btn-add"
        }`}
      >
        {editingId ? "Update" : "Tambah"}
      </button>
    </form>
  );
}
