import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Make sure to import the CSS file

const Navbar = () => {
    return (
        <nav className="na-item">
            <a className="thead" href="/demo">Welcome to CommunityHub360</a>
        </nav>
    );
};

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [number, setNumber] = useState('');
  const [houseNum, setHouseNum] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    } else {
      setPasswordError('');
    }

    const signupValues = {
      fname: firstName,
      lname: lastName,
      username,
      email,
      password,
      phoneNum: number,
      houseNum
    };

    axios.post('http://localhost:9000/createUser', signupValues)
      .then((res) => alert("User registered successfully"))
      .catch((err) => alert('Error in Signing Up'));
  };

  return (
    <>
      <Navbar />
      <section className="text-center signup-section">
        <div className="card mx-auto shadow-5-strong signup-card">
          <div className="card-body py-5 px-md-5">
            <h2 className="fw-bold mb-5 text-center signup-title">Sign up now</h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                className="form-control mb-4"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="email"
                className="form-control mb-4"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="text"
                className="form-control mb-4"
                placeholder="House No."
                value={houseNum}
                onChange={(e) => setHouseNum(e.target.value)}
              />

              <input
                type="number"
                className="form-control mb-4"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  borderColor: passwordError ? 'red' : '',
                }}
              />
              {passwordError && <p className="error-text">{passwordError}</p>}

              <button type="submit" className="btn btn-primary btn-block signup-btn">
                Sign up
              </button>

              <p className="small fw-bold mt-2 pt-1 mb-0">
                Already have an account? <a href="/login" className="link-danger">Login</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
