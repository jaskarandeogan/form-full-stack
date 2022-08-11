import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = (props) => {
  const [data, setData] = useState([0]);

  function getApiData() {
    axios
      .get("http://localhost:8080/api/users")
      //   this can be used as it is by changing api endpoints
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(getApiData, [data]);

  function deleteUser(id) {
    console.log(id);
    axios
      .delete(`http://localhost:8080/api/users/delete/${id}`)
      .then((result) => {
        alert("Deleted");
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>All entries</h1>
      <ul>
        {data.map((dataItem, idx) => (
          <li key={idx}>
            <h3 key={dataItem.name}>{dataItem.name}</h3>
            <h2 key={dataItem.age}>{dataItem.age}</h2>
            <button onClick={e => deleteUser(dataItem._id)}>Delete me</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Show;
