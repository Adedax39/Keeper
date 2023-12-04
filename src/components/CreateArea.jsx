import React, { useState } from "react";

function CreateArea(props) {
  
  
  const [note,gotNote] = useState({
    title : "",
    content : ""
  })
  
  
  
  function gotInput(event){
     const {name,value} = event.target
     gotNote(prevValue =>{
      return{...prevValue,
      [name]:value}
     })


  }
  
  function gotClicked(event){
    props.onAdd(note);
    gotNote({
      title : "",
    content : ""

    })
    event.preventDefault();

  }
  
  
  return (
    <div>
      <form>
        <input onChange={gotInput} name="title" placeholder="Title" value={note.title} />
        <textarea onChange ={gotInput} name="content" placeholder="Take a note..." rows="3" value ={note.content}/>
        <button onClick={gotClicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
