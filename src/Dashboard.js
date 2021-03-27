import React from "react";
import { getUser, removeUserSession } from "./Utils/Common";

function DashBoard(probs) {
  const users = getUser();

  function handleLogout() {
    removeUserSession();
    probs.history.push("/Login");
  }

  return (
    <div>
      <h1>Welcome {users.name}!</h1>
      <input type="button" value="Logout" onClick={handleLogout} />
    </div>
  );
}

export default DashBoard;
