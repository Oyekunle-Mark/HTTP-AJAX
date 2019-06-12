import React from "react";
import Prop from "prop-types";

export default function Form({
  firstName,
  age,
  email,
  changeName,
  changeAge,
  changeEmail,
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

      <button type="submit">Save Button</button>
    </form>
  );
}

Form.propTypes = {
  firstName: Prop.string.isRequired,
  age: Prop.string.isRequired,
  email: Prop.string.isRequired,
  changeName: Prop.func.isRequired,
  changeAge: Prop.func.isRequired,
  changeEmail: Prop.func.isRequired,
  handleSubmit: Prop.func.isRequired
};
