import React, { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Upto from "./components/Upto";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Upto />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
