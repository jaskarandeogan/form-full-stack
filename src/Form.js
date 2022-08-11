import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = (props) => {
  const statusArray = ["citizen", "pr", "tr"];

  const [input, setInput] = useState({
    name: "",
    gender: "",
    age: "",
    status: "",
  });
  // console.log("hi");
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  let newUser = {
    name: input.name,
    gender: input.gender,
    age: input.age,
    status: input.status,
  };

  function handleSubmit(e) {

    // e.preventDefault();
    console.log(newUser);
    axios
      .post("http://localhost:8080/api/users", newUser)
      .then((result) => {
        alert("Submitted");
        props.setUpdate(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="form-wrapper">
      <div className="field-wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        ></input>
      </div>
      <div className="field-wrapper">
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          id="gender"
          value="male"
          name="gender"
          onChange={handleChange}
        />{" "}
        Male
        <input
          type="radio"
          id="gender"
          value="female"
          name="gender"
          onChange={handleChange}
        />{" "}
        Female
      </div>
      <div className="field-wrapper">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        ></input>
      </div>
      <div className="field-wrapper">
        <label htmlFor="status">Status :</label>
        {statusArray.map((value, index) => (
          <label key={index} className="status">
            {value}
            <input
              type="checkbox"
              name="status"
              id="status"
              value={value}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
      <div className="field-wrapper">
        <button type="submit"  onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
