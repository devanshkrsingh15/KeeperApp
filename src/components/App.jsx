import React, { useState } from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
//import notes from "../notes.js";
import InputArea from "./InputArea.jsx";

const App = () => {
  const [list, setList] = useState([]);

  function addNote(note){
    setList((prevList) =>{
      return([...prevList,note])
    })
  }

  function deleteNote(idx){
    setList((prevList) =>{
        return prevList.filter((item, index) => {
          return index !== idx;
      });
    })

  }


  return (
    <div>
      <Header />
      <InputArea  onAdd ={addNote} />
      {list.map((noteItem,idx) => (
        <Note
          key={idx}
          id={idx}
          title={noteItem.title}
          content={noteItem.content}
          onDel = {deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
