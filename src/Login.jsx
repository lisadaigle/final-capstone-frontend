import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login(props) {
  const [errors, setErrors] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting login form"); //this is new
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user_id", response.data.user_id); ///added this
        // props.setLoggedIn(true);
        // event.target.reset();
        // setMessage("Welcome");
        window.location.href = "/hello";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  // this is new

  return (
    <div id="login">
      {loggedIn ? (
        <div>
          <h1>You are logged in!</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
          <button>Account Settings</button>
        </div>
      ) : (
        <>
          {/* <h1>Login</h1> */}

          <h1
            style={{
              fontSize: "56px",
              textAlign: "left",
              marginBottom: "10px",
              border: "2px solid #333",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#e6ffe6",
            }}
          >
            Login
          </h1>

          {message && <p>{message}</p>}
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <div>
              Email: <input name="email" type="email" />
            </div>
            <p></p>
            <p></p>
            <div>
              Password: <input name="password" type="password" />
            </div>
            <p></p>
            <p></p>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

// this is new
