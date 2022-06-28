import { Routes, Route } from "react-router-dom";
import { AllBeers } from "./pages/AllBeers/index";
import { RandomBeer } from "./pages/RandomBeer/index";
import { NewBeer } from "./pages/NewBeer/index";
import { Homepage } from "./pages/Homepage/index";
import { BeerInfo } from "./pages/BeerInfo/index";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allbeers" element={<AllBeers />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
        <Route path="/:beerId" element={<BeerInfo />} />
      </Routes>
    </div>
  );
}

export default App;
