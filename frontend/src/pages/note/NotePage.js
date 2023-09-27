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

   //  let response = fetch(`/api/notes/${noteId}`);

   const getNote = async () => {
      try {
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

   // let handleSubmit = () => {
   //    // console.log('NOTE:', note)
   //    // if (noteId !== 'new' && note.body == '') {
   //    //     deleteNote()
   //    // } else if (noteId !== 'new') {
   //    //     updateNote()
   //    // } else if (noteId === 'new' && note.body !== null) {
   //    //     createNote()
   //    // }
   //    updateNote();

   //    history.push("/");
   // };

   const handleNavigation = () => {
      console.log(note);
      updateNote();
      navigate("/"); // Navigates to the root route
   };

   return (
      <div className="note">
         <div className="note-header">
            <h3>
               <ArrowLeft onClick={handleNavigation} />
            </h3>
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
