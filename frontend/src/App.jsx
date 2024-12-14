import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

import Detay from "./pages/Detay";

import Recipe from "./pages/Recipe";
import Header from "./components/Header";
import Slider from "./components/Slider";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" bg-[#bfc0c0] h-screen] h-screen overflow-x-hidden">
        <div className=" mx-[300px] max-md:mx-[100px]   ">
          <Header />
          <Slider />
          <div className="">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/tarif/:id" element={<Detay />} />
              <Route path="/ara" element={<Recipe />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
