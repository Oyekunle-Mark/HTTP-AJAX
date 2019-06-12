import React, { useState, useEffect } from "react";
import axios from "axios";

import Friends from "./components/Friends";
import Form from "./components/Form";

function App() {
  const [friendList, updateFriendList] = useState([]);
  const [firstNameValue, updateFirstName] = useState("");
  const [ageValue, updateAge] = useState("");
  const [emailValue, updateEmail] = useState("");

  const changeNameHandler = e => updateFirstName(e.target.value);
  const changeAgeHandler = e => updateAge(e.target.value);
  const changeEmailHandler = e => updateEmail(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newFriend = {
      name: firstNameValue,
      age: Number(ageValue),
      email: emailValue
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        updateFriendList(response.data);
        updateFirstName("");
        updateAge("");
        updateEmail("");
      });
  };

  const getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => updateFriendList(response.data))
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="App">
      <Form
        firstName={firstNameValue}
        age={ageValue}
        email={emailValue}
        changeName={changeNameHandler}
        changeAge={changeAgeHandler}
        changeEmail={changeEmailHandler}
        handleSubmit={handleSubmit}
      />

      <Friends friends={friendList} />
    </div>
  );
}

export default App;
