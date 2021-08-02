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

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notesArr.map( (noteItem, noteIdx) => {
        return <Note
          key={noteIdx}
          title={noteItem.title}
          content={noteItem.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;