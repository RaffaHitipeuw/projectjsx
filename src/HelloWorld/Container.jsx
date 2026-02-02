export default function Container({ children }) {
  return (
    <>
      <nav>
        <h1>ini navbar</h1>
      </nav>

      {children}

      <footer>
        <h1>ini footer</h1>
      </footer>
    </>
  )
}
