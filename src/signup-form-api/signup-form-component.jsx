import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SignupFormComponent = () => {
  const [getDetails, setGetDetails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 
    try {
      console.log("Sending request...");

      // URL is correct for creating a user
      const pushDetails = await axios.post(
        "http://localhost:22000/api/v1/user/signup", 
        {
          firstName: e.target.firstname.value,
          email: e.target.email.value,
        }
      );

      if (pushDetails.status === 200 || pushDetails.status === 201) {
        console.log("The process is successful");
        getDetailsFunction();
        e.target.reset();
        toast.success("Signup Successful!");
      } else {
        console.log("Error occured");
      }
    } catch (e) {
      console.log("Error:", e);
      if (e.response && e.response.status === 409) {
        toast.error("User with this email already exists.");
      } else {
        toast.error("An error occurred during signup.");
      }
    }
  };

  const getDetailsFunction = async () => {
    try {
      // CORRECTED URL: Added /getUsers
      const response = await axios.get(
        "http://localhost:22000/api/v1/user/getUsers"
      );
      // CORRECTED DATA ACCESS: response.data.data
      if (response.data && response.data.success) {
        setGetDetails(response.data.data);
      }
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

      <h3>Users List:</h3>
      <ul>
        {Array.isArray(getDetails) && getDetails.map((user) => (
          <li key={user.id || user._id}>{user.firstName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default SignupFormComponent;




