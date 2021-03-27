import React, { useState } from "react";
import axios from "axios";

import { setUserSession } from "./Utils/Common";

function Login(probs) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleLogin() {
    axios
      .post("https://run.mocky.io/v3/46129e8b-c14a-4f27-930d-8e87d7ab6576", {
        userName: userName,
        password: password,
      })
      .then((response) => {
        //console.log(`Response: ${response}`);
        console.log(response);
        if (
          response.data.userName === userName &&
          response.data.password === password
        ) {
          setUserSession(response.data.token, response.data);
          console.log("Logged In");
          probs.history.push("/Dashboard");
        } else {
          setError("Invalid Username or Password!");
        }
      });
  }

  return (
    <div>
      Login
      <br />
      <div>
        UserName
        <br />
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        PassWord
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      {error && <p className="error">{error}</p>}
      <div>
        <input type="button" value="Login" onClick={handleLogin} />
      </div>
    </div>
  );
}

export default Login;
