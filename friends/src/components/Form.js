import React from "react";
import Prop from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  background: rgb(128, 128, 128);
  padding: 20px;
  border-radius: 7px;

  input {
    width: 250px;
    height: 25px;
    margin: 10px 0;
    border: 1px solid rgb(27, 27, 27);
    border-radius: 3px;
    font-size: 12px;
    padding: 3px;
  }

  button {
    width: 150px;
    height: 30px;
    background: rgb(27, 27, 27);
    color: rgb(236, 236, 236);
    border: 1px solid rgb(27, 27, 27);
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgb(85, 85, 85);
    margin-top: 10px;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default function Form({
  firstName,
  age,
  email,
  location,
  changeName,
  changeAge,
  changeEmail,
  changeLocation,
  handleSubmit,
  editing,
  cancelEditing
}) {
  return (
    <StyledForm onSubmit={handleSubmit}>
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

      {editing && <button onClick={cancelEditing}>Cancel</button>}

      <button type="submit">{editing ? "Edit Friend" : "Add Friend"}</button>
    </StyledForm>
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
  handleSubmit: Prop.func.isRequired,
  editing: Prop.string,
  cancelEditing: Prop.func
};

Form.defaultProps = {
  editing: "",
  cancelEditing: f => f
};
