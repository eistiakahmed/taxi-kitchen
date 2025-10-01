
import './App.css'
import Heading from './Components/Header/Heading'
import Navbar from './Components/Navbar/Navbar'
import States from './Components/States/States'

function App() {


  return (
    <>
    <header className='w-11/12 mx-auto py-3'>
      <Navbar />
    </header>

    <section>
      <Heading>Kitchen Room</Heading>
    </section>

    <section>
      <States></States>
    </section>
    
    </>
  )
}

export default App
