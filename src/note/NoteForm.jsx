import { useState } from "react";

export default function NoteForm({ dispatch }) {
  const [form, setForm] = useState({
    text: "",
    name: "",
    Kelas: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.text || !form.name || !form.Kelas) return;

    dispatch({
      type: "ADD_NOTE",
      payload: form,
    });

    setForm({ text: "", name: "", Kelas: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        className="border rounded px-3 py-2 w-full"
        placeholder="Note"
        value={form.text}
        onChange={e => setForm({ ...form, text: e.target.value })}
      />
      <input
        className="border rounded px-3 py-2 w-32"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        className="border rounded px-3 py-2 w-24"
        placeholder="Kelas"
        value={form.Kelas}
        onChange={e => setForm({ ...form, Kelas: e.target.value })}
      />
      <button className="px-4 py-2 rounded text-white bg-gray-300 hover:bg-gray-600">
        Add
      </button>
    </form>
  );
}
