import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes,createArray] = useState([]);
  
  
  function Addnote(note){
    createArray(prevItems => {
      return [...prevItems,note]
    });

  }

  function meDelete(id){
    createArray((prevItems) =>{
     return prevItems.filter((item,index) =>{
        return index != id
      })
      
    })

  }
  
  
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {Addnote}
      />
      {notes.map((noteItem,index) => {
       return( <Note 
          key = {index} 
          id = {index}
          title = {noteItem.title}
          content = {noteItem.content}
          delme = {meDelete}
        />)
      })}
      <Footer />
    </div>
  );
}

export default App;
