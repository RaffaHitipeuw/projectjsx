function Paragraph({text = "Ups, lupa kasih text"}) {
  
  return (
    <h1 style={{
      color: "red",
      backgroundColor: "aqua"
    }}>{text.toUpperCase()}</h1>
  )
}

export default Paragraph
