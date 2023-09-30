import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const NotePage = () => {
   const { noteId } = useParams();
   const navigate = useNavigate();

   let [note, setNote] = useState(null);

   useEffect(() => {
      getNote();
   }, [noteId]);

   // const csrfToken3 = getCookie("csrftoken"); // Replace 'csrftoken' with the name of your CSRF token cookie.

   // in development side use this as csrfToken
   // const csrfToken = "";

   // in product side use this as csrfToken
   const csrfToken = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("csrftoken="))
      .split("=")[1];

   const getNote = async () => {
      try {
         if (noteId === "add") return;

         const response = await fetch(`/api/notes/${noteId}/`);

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
      try {
         const response = await fetch(`/api/notes/${noteId}/update/`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
               "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify(note),
         });

         if (!response.ok) {
            // Handle non-successful response (e.g., 4xx or 5xx status codes)
            throw new Error(`Request failed with status ${response.status}`);
         }
      } catch (error) {
         // Handle errors that may occur during the request
         console.error("Error updating note:", error);

         // You can update a state variable or display an error message to the user
         // For example, set an error state variable in your component's state
         // setError(error.message);
      }
   };

   let createNote = async () => {
      try {
         const response = await fetch(`/api/notes/add/`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify(note),
         });

         if (!response.ok) {
            // Handle non-successful response (e.g., 4xx or 5xx status codes)
            throw new Error(`Request failed with status ${response.status}`);
         }

         // If the request was successful, you can optionally process the response
         // For example, you can check if the response contains the newly created note data
         // const responseData = await response.json();
      } catch (error) {
         // Handle errors that may occur during the request
         console.error("Error creating note:", error);

         // You can update a state variable or display an error message to the user
         // For example, set an error state variable in your component's state
         // setError(error.message);
      }
   };

   let deleteNote = async () => {
      try {
         // Send the DELETE request with error handling
         const response = await fetch(`/api/notes/${noteId}/delete/`, {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
               "X-CSRFToken": csrfToken,
            },
         });

         if (!response.ok) {
            // Handle non-successful response (e.g., 4xx or 5xx status codes)
            throw new Error(`Request failed with status ${response.status}`);
         }

         // If the request was successful, you can optionally perform any additional actions
         // For example, you can navigate to a different route after successful deletion
         navigate("/"); // Navigates to the root route
      } catch (error) {
         // Handle errors that may occur during the request
         console.error("Error deleting note:", error);

         // You can update a state variable or display an error message to the user
         // For example, set an error state variable in your component's state
         // setError(error.message);
      }
   };

   let handleSubmit = () => {
      if (noteId !== "add" && note.body === "") {
         deleteNote();
      } else if (noteId !== "add") {
         updateNote();
      } else if (noteId === "add" && note !== null) {
         createNote();
      }
      navigate("/"); // Navigates to the root route
   };

   let handleChange = (value) => {
      // console.log(note);
      setNote((note) => ({ ...note, body: value }));
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

         <textarea
            onChange={(e) => {
               handleChange(e.target.value);
            }}
            value={note?.body}
         ></textarea>

         {/* {(note !== null) & (noteId !== null) ? (
            <textarea
               onChange={(e) => {
                  setNote({ ...note, body: e.target.value });
               }}
               value={note?.body}
            ></textarea>
         ) : (
            <p>Loading notes...</p>
         )} */}
      </div>
   );
};

export default NotePage;
