import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {
  console.log(notes);
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <Header />
      <div className="flex flex-grow">
        {notes.map((note) => {
          return (
            <Note key={note.key} title={note.title} content={note.content} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
