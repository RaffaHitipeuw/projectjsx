function Header(props) {
  return (
    <div>
    <h1 className="title">{props.text}</h1>
    <h1>{props.subtitle}</h1>
    <h1>{props.title}</h1>
    </div>

  )
}

export default Header
