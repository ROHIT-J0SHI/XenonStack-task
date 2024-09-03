import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig'; // Adjust path if needed
import { toast } from 'react-toastify';
import SignInwithGoogle from './GoogleSignin';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      navigate('/profile'); // Use navigate for routing
      toast.success('User logged in successfully', {
        position: 'top-center',
      });
    } catch (error) {
      console.error(error.message);
      toast.error('Login failed. Please check your credentials.', {
        position: 'bottom-center',
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-container">
            <form onSubmit={handleSubmit}>
              <h3 className="text-center mb-4">Login</h3>

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
                  Submit
                </button>
              </div>

              <p className="text-center mt-3">
                New user? <a href="/register">Register Here</a>
              </p>

              <SignInwithGoogle />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
