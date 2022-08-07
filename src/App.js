import React, {useState, useEffect} from "react";
import axios from "axios";


const App = (props) => {
  const statusArray = ["citizen", "pr", "tr"];
  const [input, setInput] = useState();

  return (
    <div id="form-wrapper">
      <div class="field-wrapper">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Name"></input>
      </div>
      <div class="field-wrapper">
        <label htmlFor="gender">Gender</label>
        <input type="radio" id="gender" value="male" name="gender" checked />
        <input type="radio" id="gender" value="female" name="gender" />
      </div>
      <div class="field-wrapper">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="Age"></input>
      </div>
      <div class="field-wrapper">
        <label htmlFor="status">Status :</label>
        {statusArray.map((value, index) => (
          <label key={index} className="status">
            {value}
            <input type="checkbox" name={value} value={value} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default App;
