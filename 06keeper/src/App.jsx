import React, { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
