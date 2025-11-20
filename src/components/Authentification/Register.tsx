import React, { useState } from "react";
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Here you would call your auth API
    alert(`Account created for ${formData.name}!`);
    navigate('/dashboard'); // or /login
  };

  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-green-100 shadow-2xl">
        <div className="card-body">
          <div className="flex items-center mb-6">
            <Link to="/" className="btn btn-ghost btn-circle">
              <ArrowLeft size={24} />
            </Link>
            <h2 className="text-2xl font-bold flex-1 text-center text-red-700">Create Account</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 ">
          
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full bg-blue-100"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full bg-blue-100"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full bg-blue-100"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full bg-blue-100"
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />

            <button type="submit" className="btn bg-red-600 w-full">
              Create Account
            </button>

            <p className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="link link-primary">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}






// export const Register = () => {
//   const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
//   const [signUpName, setSignUpName] = useState("");
//   const [signUpEmail, setSignUpEmail] = useState("");
//   const [signUpPassword, setSignUpPassword] = useState("");
//   const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle sign-up logic here
//     console.log("Name:", signUpName);
//     console.log("Email:", signUpEmail);
//     console.log("Password:", signUpPassword);
//     console.log("Confirm Password:", signUpConfirmPassword);
//     // Close the modal after sign-up
//     setIsSignUpModalOpen(false);
//   };
//   return (
//     <>
//       Sign-Up Modal
//         <div className={`modal ${isSignUpModalOpen ? 'modal-open' : ''}`}>
//         <div className="modal-box max-w-md">
//           <h3 className="font-bold text-2xl mb-2">Create Your Account</h3>
//           <p className="text-base-content/60 mb-6">Join the future of library management</p>

//           <form onSubmit={handleSignUp} className="space-y-5">
//             <div className="form-control">
//               <label className="label"><span className="label-text font-medium">Full Name</span></label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 value={signUpName}
//                 onChange={(e) => setSignUpName(e.target.value)}
//                 className="input input-bordered"
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label"><span className="label-text font-medium">Email</span></label>
//               <input
//                 type="email"
//                 placeholder="john@library.com"
//                 value={signUpEmail}
//                 onChange={(e) => setSignUpEmail(e.target.value)}
//                 className="input input-bordered"
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label"><span className="label-text font-medium">Password</span></label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 value={signUpPassword}
//                 onChange={(e) => setSignUpPassword(e.target.value)}
//                 className="input input-bordered"
//                 required
//               />
//             </div>

//             <div className="form-control">
//               <label className="label"><span className="label-text font-medium">Confirm Password</span></label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 value={signUpConfirmPassword}
//                 onChange={(e) => setSignUpConfirmPassword(e.target.value)}
//                 className="input input-bordered"
//                 required
//               />
//             </div>

//             <div className="modal-action mt-8">
//               <button type="button" onClick={() => setIsSignUpModalOpen(false)} className="btn btn-ghost">
//                 Cancel
//               </button>
//               <button type="submit" className="btn btn-primary px-10">
//                 Create Account
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//     </>
//   )
// }
