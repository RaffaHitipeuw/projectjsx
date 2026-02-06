import { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export default function ProfileProvider({ children }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [age, setAge] = useState("");

  return (
    <ProfileContext.Provider
      value={{
        name,
        setName,
        text,
        setText,
        age,
        setAge,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
