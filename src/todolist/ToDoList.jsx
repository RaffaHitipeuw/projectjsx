import Todo from "./Todo";

export default function ToDoList({ todos }) {
    return (
        <ul>
            <Todo text="Belajar React" isCompleted={true} />
            <Todo text="Belajar React" isCompleted={true} />
            <Todo text="Belajar React" isCompleted={true} />
        </ul>
    );
}