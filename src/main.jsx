import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Table from './table/Row'
import HelloWorld from './HelloWorld/HelloWorld'
import Container from './HelloWorld/Container'
import AlertButton from './button/AlertButton'
import MyButton from './button/MyButton'
import Toolbar from './button/Toolbar'
import SearchForm from './form/SearchForm'
import SayHelloForm from './form/SayHelloForm'
import Counter from './form/Counter'
import ContactForm from './contact/ContactForm'
import Task from './task/TaskForm'
import CounterApp from './counter/CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
    <Table />  
    <HelloWorld />
    <AlertButton text="Alert" message="Hello World" />
    <MyButton text="Click Me" onSmash={() => alert('Button Clicked!')} />
    <Toolbar onClick={(e) => {
      e.stopPropagation();
      alert('Toolbar Clicked!')}
    }  />
    <SearchForm />
    <SayHelloForm />
    <ContactForm />
    <Task />
    <Counter />
    <CounterApp />
    </Container>
  </StrictMode>,
)
