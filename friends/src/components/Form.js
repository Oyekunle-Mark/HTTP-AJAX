import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [firstName, updateFirstName] = useState("");
  const [age, updateAge] = useState("");
  const [email, updateEmail] = useState("");

  const changeName = e => updateFirstName(e.target.value);
  const changeAge = e => updateAge(e.target.value);
  const changeEmail = e => updateEmail(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newFriend = {
      name: firstName,
      age: Number(age),
      email: email
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => console.log(response));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={firstName}
        onChange={changeName}
      />
      <input type="number" placeholder="Age" value={age} onChange={changeAge} />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={changeEmail}
      />

      <button type="submit">Save Button</button>
    </form>
  );
}
