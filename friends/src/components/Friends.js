import React from "react";
import Prop from "prop-types";
import styled from "styled-components";

import FriendCard from "./FriendCard";
import Form from "./Form";

const StyledFriendCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
`;

const StyledFriends = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledFriedForm = styled.div`
  height: 300px;
  margin: 30px 20px 0 0;
`;

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
  editing,
  cancelEditing
}) {
  const friendCard = friends.map(friend => (
    <FriendCard
      key={friend.id}
      friend={friend}
      removeFriend={removeFriend}
      updateEditForm={updateEditForm}
    />
  ));

  return (
    <StyledFriends>
      <StyledFriendCards>{friendCard}</StyledFriendCards>

      <StyledFriedForm>
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
            editing={editing}
            cancelEditing={cancelEditing}
          />
        )}
      </StyledFriedForm>
    </StyledFriends>
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
  editing: Prop.string.isRequired,
  cancelEditing: Prop.func.isRequired
};
