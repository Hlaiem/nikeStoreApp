import { Nav } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {Footer,} from "./sections";
import Routes from './Routes'

<ToastContainer />

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Routes/>
      </section>
     
      
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
