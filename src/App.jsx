
import './App.css'
import Heading from './Components/Header/Heading'
import Navbar from './Components/Navbar/Navbar'
import OrderCards from './Components/OrdersCard/OrderCards'
import States from './Components/States/States'

function App() {


  return (
    <>
    <header className='w-11/12 mx-auto py-3'>
      <Navbar />
    </header>

    <section className=''>
      <Heading>Kitchen Room</Heading>
    </section>

    

    <section className=''>
   <div className="w-11/12 mx-auto py-12 ">
     <OrderCards></OrderCards>
   </div>
    </section>
    
    </>
  )
}

export default App


