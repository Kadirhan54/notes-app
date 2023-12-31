import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import AddButton from "../../components/AddButton";

const NotesListPage = () => {
   const [notes, setNotes] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

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
         setLoading(false);
      } catch (error) {
         console.error("Error fetching notes:", error);
         setError(error);
         setLoading(false);
      }
   };

   return (
      <div>
         <div className="notes">
            <div className="notes-header">
               <h2 className="notes-title">&#9782; Notes</h2>
               <p className="notes-count">{notes.length}</p>
            </div>

            {/* <div className="notes-list">
               {notes.length > 0 ? (
                  notes.map((note, index) => (
                     <ListItem key={index} note={note}></ListItem>
                  ))
               ) : (
                  <p>Loading notes...</p>
               )}
            </div> */}

            <div>
               {loading ? (
                  <p>Loading...</p>
               ) : error ? (
                  <p>Error: {error.message}</p>
               ) : (
                  <div className="notes-list">
                     {notes.map((note, index) => (
                        <ListItem key={index} note={note}></ListItem>
                     ))}
                  </div>
               )}
            </div>

            <AddButton />
         </div>
      </div>
   );
};

export default NotesListPage;
