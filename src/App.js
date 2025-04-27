import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Sobre from "./components/Sobre/Sobre";
import Softwares from "./components/Softwares/Softwares";
import Projetos from "./components/Projetos/Projetos";
import Certificados from "./components/Certificados/Certificados";
import Footer from "./components/Footer";
import Curriculo from "./components/Curriculo/NovoCurriculo";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/projeto" element={<Projetos />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/softwares" element={<Softwares />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
