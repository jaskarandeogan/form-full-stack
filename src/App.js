import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Show from "./Show";

const App = (props) => {
  return (
    <>
      <Form />
      <Show />
    </>
  );
};

export default App;
