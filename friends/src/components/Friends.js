import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Friends() {
  const [friendList, updateFriendList] = useState([]);

  const getFriends = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => updateFriendList(response.data))
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    getFriends();
  }, []);

  const listOfFriends = friendList.map(friend => (
    <tr key={friend.id}>
      <td>{friend.name}</td>
      <td>{friend.age}</td>
      <td>{friend.email}</td>
    </tr>
  ));
  return (
    <table>
      <tbody>{listOfFriends}</tbody>
    </table>
  );
}
