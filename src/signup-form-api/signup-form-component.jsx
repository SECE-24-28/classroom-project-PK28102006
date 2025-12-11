import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const [getDetails, setGetDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    try {
      console.log("Sending request...");

      // CORRECTED URL: /api/v1/user/signup
      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/user/signup", 
        {
          firstName: e.target.firstname.value,
          email: e.target.email.value,
        }
      );

      // Check for 200 OR 201 (Created)
      if (pushDetails.status === 200 || pushDetails.status === 201) {
        console.log("The process is successful");
        // Refresh the list after adding
        getDetailsFunction();
        // clear form
        e.target.reset();
        alert("Signup Successful!");
      } else {
        console.log("Error occured");
      }
    } catch (e) {
      console.log("Error:", e);
      if (e.response && e.response.status === 409) {
        setErrorMessage("User with this email already exists.");
      } else {
        setErrorMessage("An error occurred during signup.");
      }
    }
  };

  const getDetailsFunction = async () => {
    try {
      // CORRECTED URL: /api/v1/user
      const getDetails = await axios.get(
        "http://localhost:21000/api/v1/user"
      );
      setGetDetails(getDetails.data.data);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    getDetailsFunction();
  }, []);

  console.log("The main data:", getDetails);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required />
        <br />
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" required />
        <br />
        <button type="submit">Submit</button>
      </form>
      
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Optional: Show data to prove it works */}
      <h3>Users List:</h3>
      <ul>
        {getDetails.map((user) => (
          <li key={user._id}>{user.firstName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default SignupFormComponent;
