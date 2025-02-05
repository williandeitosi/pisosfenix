import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LDTpisos from "./components/LDTpisos";
import ObrigadoPage from "./components/obrigado";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LDTpisos />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
      </Routes>
    </Router>
  );
}
