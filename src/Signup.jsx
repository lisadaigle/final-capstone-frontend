import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
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
        Sign Up
      </h1>

      {/* <h1>Signup</h1> */}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <p></p>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <p></p>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <p></p>
        <div>
          Confirm Password: <input name="password_confirmation" type="password" />
        </div>
        <p></p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
