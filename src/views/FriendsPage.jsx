import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Styles/FriendsPage.css";

var allusers = [];

const FriendsPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getOneUser = async () => {
      const response = await axios.get(`http://localhost:8080/send`);
      response.data.data.map((item) => {
        allusers.push(item);
      });
      setData(response.data.data);
      console.log("aaa", response.data.data);
    };
    getOneUser();
  }, []);

  return (
    <div>
      <h1>Friends Page</h1>
      {console.log(allusers)}
      <div>
        {allusers.map((item, index) => (
          <div className="card">
            <img id="img" src={item.displaypicture} />
            <div className="container">
              <p>{item.username}</p>
              <p>{item.profession}</p>
              <button id="addFriend">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
