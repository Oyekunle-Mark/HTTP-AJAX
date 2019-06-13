import React from "react";
import Prop from "prop-types";

import FriendList from "./FriendList";
import Form from "./Form";

export default function Friends({
  friends,
  removeFriend,
  updateFriend,
  updateEditForm,
  firstName,
  age,
  email,
  location,
  changeName,
  changeAge,
  changeEmail,
  changeLocation,
  editing
}) {
  return (
    <>
      <FriendList
        friends={friends}
        removeFriend={removeFriend}
        updateEditForm={updateEditForm}
      />

      {editing && (
        <Form
          firstName={firstName}
          age={age}
          email={email}
          location={location}
          changeName={changeName}
          changeAge={changeAge}
          changeEmail={changeEmail}
          changeLocation={changeLocation}
          handleSubmit={updateFriend}
        />
      )}
    </>
  );
}

Friends.propTypes = {
  friends: Prop.arrayOf(Prop.object).isRequired,
  removeFriend: Prop.func.isRequired,
  firstName: Prop.string.isRequired,
  age: Prop.string.isRequired,
  email: Prop.string.isRequired,
  location: Prop.string.isRequired,
  changeName: Prop.func.isRequired,
  changeAge: Prop.func.isRequired,
  changeEmail: Prop.func.isRequired,
  changeLocation: Prop.func.isRequired,
  updateFriend: Prop.func.isRequired,
  updateEditForm: Prop.func.isRequired,
  editing: Prop.string.isRequired
};
