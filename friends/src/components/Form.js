import React from "react";
import Prop from "prop-types";

export default function Form({
  firstName,
  age,
  email,
  location,
  changeName,
  changeAge,
  changeEmail,
  changeLocation,
  handleSubmit
}) {
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

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={changeLocation}
      />

      <button type="submit">Save Button</button>
    </form>
  );
}

Form.propTypes = {
  firstName: Prop.string.isRequired,
  age: Prop.string.isRequired,
  email: Prop.string.isRequired,
  location: Prop.string.isRequired,
  changeName: Prop.func.isRequired,
  changeAge: Prop.func.isRequired,
  changeEmail: Prop.func.isRequired,
  changeLocation: Prop.func.isRequired,
  handleSubmit: Prop.func.isRequired
};
