import React, { useState } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helpers/Wrapper";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    clearInputs();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clearInputs = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };

  const isFormValid = () => {
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return false;
    }
    return true;
  };

  const errorHandler = () => {
    setError(null);
    console.log('aaaaa');
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          min="1"
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};

export default AddUser;
