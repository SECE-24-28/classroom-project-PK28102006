import React, { useState } from "react";
import { GetStartedStyle } from "./get-start-style";

const GetStarted = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  // STATE FOR ALL INPUTS
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "AGH B2C",
    passoutYear: "2024",
    department: "CSE",
    ugpg: "UG",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // HANDLING INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT HANDLER (YOUR REQUESTED STYLE)
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("The first name is :", formData.firstName);
    console.log("The last name is :", formData.lastName);
    console.log("The college is :", formData.college);
    console.log("The passout year is :", formData.passoutYear);
    console.log("The department is :", formData.department);
    console.log("The UG/PG is :", formData.ugpg);
    console.log("The email is :", formData.email);
    console.log("The mobile number is :", formData.mobile);
    console.log("The password is :", formData.password);
    console.log("The confirm password is :", formData.confirmPassword);
  };

  return (
    <GetStartedStyle>
      <div className="form-wrapper">
        <h2 className="title">
          Welcome to <span className="highlight">Aptitude Guru Hem LMS</span>
        </h2>

        <form className="form-box" onSubmit={handleSubmit}>
          {/* FIRST + LAST NAME */}
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* COLLEGE + PASSOUT YEAR */}
          <div className="row">
            <div className="field">
              <label>Select College</label>
              <select name="college" onChange={handleChange}>
                <option>AGH B2C</option>
                <option>CIT-Chennai</option>
                <option>SVCE-Chennai</option>
                <option>MIT-Madurai</option>
                <option>Anna University</option>
                <option>SRM</option>

              </select>
            </div>

            <div className="field">
              <label>Select Passout Year</label>
              <select name="passoutYear" onChange={handleChange}>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
                <option>2033</option>
              </select>
            </div>
          </div>

          {/* DEPARTMENT + UG / PG */}
          <div className="row">
            <div className="field">
              <label>Department</label>
              <select name="department" onChange={handleChange}>
                <option>CSE</option>
                <option>Information Systems</option>
                <option>Software System</option>
                <option>Computer Systems and Design</option>
                <option>MECH</option>
                <option>EEE</option>
                <option>IT</option>
                <option>CIVIL</option>
                <option>ECE</option>
              </select>
            </div>

            <div className="field">
              <label>UG or PG</label>
              <select name="ugpg" onChange={handleChange}>
                <option>UG</option>
                <option>PG</option>
              </select>
            </div>
          </div>

          {/* EMAIL + MOBILE */}
          <div className="row">
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mobile</label>
              <div className="mobile-box">
                <select>
                  <option>IND</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>CAN</option>
                  <option>AUS</option>
                  <option>CHINA</option>
                  <option>JAP</option>
                  <option>KOR</option>
                  <option>FRA</option>
                  <option>GER</option>
                  <option>ITA</option>
                </select>
                <input
                  name="mobile"
                  type="text"
                  placeholder="Enter mobile number"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* PASSWORD + CONFIRM PASSWORD */}
          <div className="row">
            <div className="field">
              <label>Password</label>
              <div className="password-box">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter the password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <div className="password-box">
                <input
                  name="confirmPassword"
                  type={showCPassword ? "text" : "password"}
                  placeholder="Enter confirm password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowCPassword(!showCPassword)}>
                  {showCPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>
          </div>

          {/* PASSWORD RULES */}
          <ul className="password-rules">
            <li>minimum 8 characters</li>
            <li>one special character</li>
            <li>one number</li>
            <li>one lowercase character</li>
            <li>one uppercase character</li>
          </ul>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </GetStartedStyle>
  );
};

export default GetStarted;