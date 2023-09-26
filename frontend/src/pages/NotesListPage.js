import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await fetch("/api/notes/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <ListItem key={index} note={note}></ListItem>
          ))
        ) : (
          <p>Loading notes...</p>
        )}
      </div>
    </div>
  );
};

export default NotesListPage;
