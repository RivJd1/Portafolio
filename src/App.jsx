import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import HistorialAcademico from "./pages/HistorialAcademico.jsx";
import PortafolioProyectos from "./pages/PortafolioProyectos.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/historial-academico" element={<HistorialAcademico />} />
          <Route path="/portafolio-proyectos" element={<PortafolioProyectos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
