import React from "react";
import Prop from "prop-types";

export default function Friends({ friends, removeFriend, updateEditForm }) {
  const listOfFriends = friends.map(friend => (
    <tr key={friend.id}>
      <td>{friend.name}</td>
      <td>{friend.age}</td>
      <td>{friend.email}</td>
      <td>{friend.location}</td>
      <td>
        <button onClick={() => removeFriend(friend.id)}>Delete</button>
      </td>
      <td>
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
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Location</th>
        </tr>
      </thead>

      <tbody>{listOfFriends}</tbody>
    </table>
  );
}

Friends.propTypes = {
  friends: Prop.arrayOf(Prop.object).isRequired,
  removeFriend: Prop.func.isRequired,
  updateEditForm: Prop.func.isRequired
};
