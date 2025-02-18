import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import Contactuspage from "./Pages/Contactuspage";
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            {/* <Route index path="/contactus" element={<Contactuspage />} /> */}
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
