import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
