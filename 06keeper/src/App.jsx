import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
