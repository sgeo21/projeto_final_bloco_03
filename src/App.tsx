
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {

 return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="">
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App