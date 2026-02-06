import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import NoteApp from "./NoteApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NoteApp />
    </StrictMode>
)