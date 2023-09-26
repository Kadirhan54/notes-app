import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const { noteId } = useParams();
  return (
    <div>
      <h2>Note Page</h2>
      <p>Note ID: {noteId}</p>
      {/* Add your component logic here */}
    </div>
  );
};

export default NotePage;
