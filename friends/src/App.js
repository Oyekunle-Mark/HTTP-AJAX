import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Friends from "./components/Friends";
import Form from "./components/Form";
import Navigation from "./components/Navigation";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background: rgb(51, 50, 50);
  color: rgb(236, 236, 236);
  font-family: sans-serif;
  font-size: 16px;
`;

const CreateUserForm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;

function App() {
  const [friendList, updateFriendList] = useState([]);
  const [firstNameValue, updateFirstName] = useState("");
  const [ageValue, updateAge] = useState("");
  const [emailValue, updateEmail] = useState("");
  const [locationValue, updateLocation] = useState("");
  const [currentlyEditedFriend, updateCurrentlyEditedFried] = useState("");

  const generateNewFriendObject = () => ({
    name: firstNameValue,
    age: Number(ageValue),
    email: emailValue,
    location: locationValue
  });

  const getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => updateFriendList(response.data))
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    getFriends();
  }, []);

  const changeNameHandler = e => updateFirstName(e.target.value);
  const changeAgeHandler = e => updateAge(e.target.value);
  const changeEmailHandler = e => updateEmail(e.target.value);
  const changeLocationHandler = e => updateLocation(e.target.value);

  const createFriend = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/friends", generateNewFriendObject())
      .then(response => {
        updateFriendList(response.data);
        updateFirstName("");
        updateAge("");
        updateEmail("");
        updateLocation("");
      });
  };

  const deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`).then(response => {
      updateFriendList(response.data);
    });
  };

  const populateEditForm = (id, name, age, email, location) => {
    updateCurrentlyEditedFried(id.toString());
    updateFirstName(name);
    updateAge(age.toString());
    updateEmail(email);
    updateLocation(location);
  };

  const editFriend = e => {
    e.preventDefault();

    axios
      .put(
        `http://localhost:5000/friends/${Number(currentlyEditedFriend)}`,
        generateNewFriendObject()
      )
      .then(response => {
        updateFriendList(response.data);
        updateCurrentlyEditedFried("");
        updateFirstName("");
        updateAge("");
        updateEmail("");
        updateLocation("");
      });
  };

  const cancelEditForm = () => {
    updateCurrentlyEditedFried("");
    updateFirstName("");
    updateAge("");
    updateEmail("");
    updateLocation("");
  };

  return (
    <StyledApp>
      <Navigation />

      <Route
        exact
        path="/"
        render={props => (
          <Friends
            {...props}
            friends={friendList}
            removeFriend={deleteFriend}
            updateFriend={editFriend}
            updateEditForm={populateEditForm}
            firstName={firstNameValue}
            age={ageValue}
            email={emailValue}
            location={locationValue}
            changeName={changeNameHandler}
            changeAge={changeAgeHandler}
            changeEmail={changeEmailHandler}
            changeLocation={changeLocationHandler}
            editing={currentlyEditedFriend}
            cancelEditing={cancelEditForm}
          />
        )}
      />

      <Route
        path="/add_friend"
        render={props => (
          <CreateUserForm>
            <Form
              {...props}
              firstName={firstNameValue}
              age={ageValue}
              email={emailValue}
              location={locationValue}
              changeName={changeNameHandler}
              changeAge={changeAgeHandler}
              changeEmail={changeEmailHandler}
              changeLocation={changeLocationHandler}
              handleSubmit={createFriend}
            />
          </CreateUserForm>
        )}
      />
    </StyledApp>
  );
}

export default App;
