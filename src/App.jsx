import { ToastContainer } from 'react-toastify';
import './App.css';
import Heading from './Components/Header/Heading';
import Navbar from './Components/Navbar/Navbar';
import OrderCards from './Components/OrdersCard/OrderCards';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar />
      </header>

      <section className="">
        <Heading>Kitchen Room</Heading>
      </section>

      <section className="">
        <div className="w-11/12 mx-auto py-12 ">
          <OrderCards></OrderCards>
        </div>
      </section>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
