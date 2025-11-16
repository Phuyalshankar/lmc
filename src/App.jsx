import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Distribution from "./pages/Distribution";
import DG from "./pages/DG";
import Solar from "./pages/Solar";
import Stabilizer from "./pages/Stabilizer";
import Emergency from "./pages/Emergency";
import Stats from "./pages/Stats";
import Workflow from "./pages/Workflow";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 min-h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/dg" element={<DG />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/stabilizer" element={<Stabilizer />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/workflow" element={<Workflow />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
