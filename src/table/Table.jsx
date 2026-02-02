import Row from "./Row.jsx";

export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row text="Satu" count={1}/>
                <Row text="Dua" count={2}/>
                <Row text="Tiga" count={3}/>
            </tbody>
        </table>

    );
}