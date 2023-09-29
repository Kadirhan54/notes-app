import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const NotePage = () => {
   const { noteId } = useParams();
   const navigate = useNavigate();

   let [note, setNote] = useState(null);

   useEffect(() => {
      getNote();
   }, [noteId]);

   const getNote = async () => {
      try {
         if (noteId === "new") return;

         const response = await fetch(`/api/notes/${noteId}`);
         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
         const data = await response.json();
         setNote(data);
      } catch (error) {
         console.error("Error fetching notes:", error);
      }
   };

   let updateNote = async () => {
      fetch(`/api/notes/${noteId}/update`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(note),
      });
   };

   let createNote = async () => {
      fetch(`/api/notes/create`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(note),
      });
   };

   let deleteNote = async () => {
      fetch(`/api/notes/${noteId}/delete`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
      });

      navigate("/"); // Navigates to the root route
   };

   let handleSubmit = () => {
      console.log("NOTE:", note);
      if (noteId !== "add" && note.body == "") {
         deleteNote();
      } else if (noteId !== "add") {
         updateNote();
      } else if (noteId === "add" && note.body !== null) {
         createNote();
      }
      navigate("/"); // Navigates to the root route
   };

   return (
      <div className="note">
         <div className="note-header">
            <h3>
               <ArrowLeft onClick={handleSubmit} />
            </h3>
            {noteId !== "add" ? (
               <button onClick={deleteNote}>Delete</button>
            ) : (
               <button onClick={handleSubmit}>Done</button>
            )}
         </div>
         {/* <p>{note?.body}</p> */}
         <textarea
            onChange={(e) => {
               setNote({ ...note, body: e.target.value });
            }}
            defaultValue={note?.body}
         ></textarea>
         {/* Add your component logic here */}
      </div>
   );
};

export default NotePage;
