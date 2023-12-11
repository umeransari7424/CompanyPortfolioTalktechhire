import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Base from "./Components/Layout/Base";
import Home from "./Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Typewriter from 'typewriter-effect/dist/core';


function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
