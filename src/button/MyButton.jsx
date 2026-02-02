export default function MyButton({ text, onSmash }) {
  function handleClick(e) {
    console.log(e);
    onSmash();
  }
  return <button onClick={handleClick}>{text}</button>;
}