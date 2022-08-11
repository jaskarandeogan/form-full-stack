import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Show from "./Show";

const App = (props) => {
  const [updateData, setUpdate] = useState();

  return (
    <>
      
      <Form setUpdate = {setUpdate}/>
      <Show setUpdate = {setUpdate} updateData={updateData}/>
    </>
  );
};

export default App;
