import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../config/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
        photo: "", // Placeholder for user photo URL if needed
      });

      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!! Login to continue..", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="register-container">
            <form onSubmit={handleRegister}>
              <h3 className="text-center mb-4">Sign Up</h3>

              <div className="mb-3">
                <label htmlFor="fname">First name</label>
                <input
                  id="fname"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lname">Last name</label>
                <input
                  id="lname"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>

              <p className="text-center mt-3">
                Already registered? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
