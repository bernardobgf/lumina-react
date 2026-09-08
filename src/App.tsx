import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import type { PageOptions } from "./types/types";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState<PageOptions>("home");

  const pageHandler = (newPage: PageOptions) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen bg-base-100 text-primary-content">
      <Navbar pageHandler={pageHandler} />
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "pricing" && <Pricing />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
