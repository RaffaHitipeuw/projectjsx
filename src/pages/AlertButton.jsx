export default function AlertButton({ text, message }) {
  function handleClick() {
    const button = document.getElementById("text");

    if (button.innerText === "pencet tombol diatas") {
      button.innerText = message;
    } else if (button.innerText === message) {
      button.innerText = "pencet tombol diatas";
    }
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p id="text">pencet tombol diatas</p>
    </>
  );
}