import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const users = [];

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
