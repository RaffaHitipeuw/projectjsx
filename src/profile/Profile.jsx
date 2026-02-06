import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const { name, text, age } = useContext(ProfileContext);

  return (
    <div>
      <h2>Profile</h2>

      <p>Hello {name}</p>
      <p>{text}</p>
      <p>Umur: {age}</p>
    </div>
  );
}
