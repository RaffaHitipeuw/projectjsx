import { useContext } from "react";
import { ProfileContext } from "./ProfileContext"; // ⬅️ NAMED IMPORT

export default function ProfileForm() {
  const context = useContext(ProfileContext);

  console.log("CTX:", context); // ⬅️ DEBUG WAJIB

  const { name, setName, text, setText, age, setAge } = context || {};

  return (
    <div>
      <h2>Profile Form</h2>

      <input
        type="text"
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Umur"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}
