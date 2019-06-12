import React from "react";
import Prop from "prop-types";

export default function Friends({ friends }) {
  const listOfFriends = friends.map(friend => (
    <tr key={friend.id}>
      <td>{friend.name}</td>
      <td>{friend.age}</td>
      <td>{friend.email}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>{listOfFriends}</tbody>
    </table>
  );
}

Friends.propTypes = {
  friends: Prop.arrayOf(Prop.object).isRequired
};
