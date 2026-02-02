import Header from './Header'
import Paragraph from './Paragraph'
import Container from './Container'
import './HelloWorld.css'

function HelloWorld() {
  const props = {
    text: 'Hello World',
    subtitle: 'halo sekali lagi',
    title: 'title bos'
  }

  return (
    <div>
      <Container>
        <Header {...props} />
        <Paragraph />
      </Container>
    </div>
  )
}

export default HelloWorld
