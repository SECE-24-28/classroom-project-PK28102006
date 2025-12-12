
import React, { useState } from "react";
const UsestateformComponent = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const fun1 = (e) => {
  //   if (e.target.name === "email") {
  //     setEmail(e.target.value);
  //   } else if (e.target.name === "name") {
  //     setName(e.target.value);
  //   }
  // };
  // const submitthings = () => {
  //   console.log("The name is :", name);
  //   console.log("The email is", email);
  // };
  const [details, setDetails] = useState({ name: "", email: "" });
  const fun1 = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitthings = () => {
    console.log("The details:", details);
  };
  return (
    <div>
      <h1>Use State Form Component</h1>
      <form action={submitthings}>
        <label htmlFor="name">Name</label>
        <input type="text" id="Name" name="name" onChange={fun1} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={fun1} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UsestateformComponent;
