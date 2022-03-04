import React, { useState, useRef, Fragment } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (!isFormValid(enteredUsername, enteredAge)) {
      return;
    }
    onAddUser(enteredUsername, enteredAge);
    clearInputs();
  };

  const clearInputs = () => {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const isFormValid = (name, age) => {
    if (name.trim().length === 0 || age.trim().length === 0 || +age < 1) {
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
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef}></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" min="1" ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Fragment>
  );
};

export default AddUser;
