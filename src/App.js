import React, { useState } from "react";

import Card from "./components/UI/Card";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsers((prev) => {
      return [
        ...prev,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      <Card>
        <UsersList users={users} />
      </Card>
    </div>
  );
}

export default App;
