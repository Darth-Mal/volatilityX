import Volatility from "../pages/volatility";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Volatility />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
