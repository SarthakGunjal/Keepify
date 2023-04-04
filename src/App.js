import NotesList from "./Components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "24/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "5/09/2021",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "10/11/2021",
    },
    {
      id: nanoid(),
      text: "This is my fifth note!",
      date: "1/8/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  //Retreiving the notes from local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []); // Empty dependency means it will run only once when we load the page

  //Saving the notes to local storage
  useEffect(() => {
    console.log(notes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;