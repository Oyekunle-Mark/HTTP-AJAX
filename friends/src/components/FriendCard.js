import React from "react";
import Prop from "prop-types";
import styled from "styled-components";

const StyledFriendCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 160px;
  margin: 30px 20px;
  border-radius: 10px;
  background: rgb(128, 128, 128);
  padding: 20px 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
  }

  div h3 {
    font-size: 28px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
    margin-right: 7px;
    overflow: scroll;
    width: 100%;
    text-align: right;
  }

  div h4 {
    font-size: 28px;
  }

  p {
    font-size: 15px;
    font-style: italic;
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }

  div img {
    width: 30px;
    height: 30px;
  }

  div span {
    font-size: 12px;
  }

  div button {
    width: 80px;
    height: 30px;
    margin: 20px 15px;
    background: rgb(27, 27, 27);
    color: rgb(236, 236, 236);
    border: 1px solid rgb(27, 27, 27);
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgb(85, 85, 85);
  }

  div button:hover {
    cursor: pointer;
  }
`;

export default function FriendCard({ friend, removeFriend, updateEditForm }) {
  return (
    <StyledFriendCard>
      <div>
        <h3>{friend.name},</h3>
        <h4>{friend.age}</h4>
      </div>

      <p>{friend.email}</p>

      <div>
        <img
          src="https://image.flaticon.com/icons/svg/1001/1001022.svg"
          alt="location"
        />
        <span>{friend.location}</span>
      </div>

      <div>
        <button
          onClick={() =>
            updateEditForm(
              friend.id,
              friend.name,
              friend.age,
              friend.email,
              friend.location
            )
          }
        >
          Edit
        </button>
        <button onClick={() => removeFriend(friend.id)}>Delete</button>
      </div>
    </StyledFriendCard>
  );
}

FriendCard.propTypes = {
  friend: Prop.shape({
    id: Prop.number.isRequired,
    name: Prop.string.isRequired,
    age: Prop.number.isRequired,
    email: Prop.string.isRequired,
    location: Prop.string.isRequired
  }).isRequired,
  removeFriend: Prop.func.isRequired,
  updateEditForm: Prop.func.isRequired
};
