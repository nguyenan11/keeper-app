import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notesArr, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes( prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes( prevNotes => {
      return prevNotes.filter( (noteItem, noteIdx) => {
        return noteIdx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notesArr.map( (noteItem, noteIdx) => {
        return <Note
          key={noteIdx}
          id={noteIdx}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
