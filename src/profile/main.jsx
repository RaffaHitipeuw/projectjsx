import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfileApp from "./ProfileApp";
import ProfileProvider from "./ProfileContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileProvider>
      <ProfileApp />
    </ProfileProvider>
  </StrictMode>
);
