import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLength = 200;

  const handleChange = (e) => {
    if (characterLength - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const HandleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to a dd a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLength - noteText.length} Remaining</small>
        <button className="save" onClick={HandleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;