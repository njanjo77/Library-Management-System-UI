import React, { useState } from "react";
import { NavLink } from "react-router";

export const Login = () => {

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // Close the modal after sign-in
    setIsSignInModalOpen(false);
  };
  return (
    <>
        <input
        type="checkbox"
        checked={isSignInModalOpen}
        onChange={() => setIsSignInModalOpen(!isSignInModalOpen)}
        className="modal-toggle"
      />
      <div className={`modal ${isSignInModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-2xl mb-6">Welcome Back!</h3>
          
          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="admin@library.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text ml-2">Remember me</span>
              </label>
              <a href="#" className="link link-primary text-sm">Forgot password?</a>
            </div>

            <div className="modal-action mt-8">
              <button
                type="button"
                onClick={() => setIsSignInModalOpen(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-8">
                Sign In
              </button>
              <p className="text-center text-sm">
              Don't have an account?{' '}
              <NavLink to="/register" className="link link-primary">Get Started</NavLink>
            </p>
            </div>
          </form>
        </div>
        </div>
    </>
  )
}
