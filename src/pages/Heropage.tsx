
import {  ArrowRight, BookOpen, LogIn, Shield, TrendingUp, Users } from "lucide-react";
import { Footer } from "../components/footer/Footer";
import { useNavigate } from "react-router";
 




export const Heropage = () => {
    const Navigate = useNavigate();
    // const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const [signUpName, setSignUpName] = useState("");
    // const [signUpEmail, setSignUpEmail] = useState("");
    // const [signUpPassword, setSignUpPassword] = useState("");
    // const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
    

    // const handleSignIn = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Handle sign-in logic here
    //     console.log("Signing in with", email, password);
    //     alert(`Welcome Back ${email}`);
    //     setIsSignInModalOpen(false);
    //     setEmail("");
    //     setPassword("");

    // };
    // const handleSignUp = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if(signUpPassword !== signUpConfirmPassword) {
    //         alert("Passwords do not match!");
    //         return;
    //     }
    //     console.log('Sign Up:', { name: signUpName, email: signUpEmail});
    //     alert(`Signed Up Successfully as ${signUpName}`);
    //     setIsSignUpModalOpen(false);
    //     setSignUpName("");
    //     setSignUpEmail("");
    //     setSignUpPassword("");
    //     setSignUpConfirmPassword("");
    // };



    return (
        <>
            <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center px-4">
        {/* Header Section */}
        <div className="text-center mb-12 bg-blue-100 p-8 rounded-lg shadow-lg w-full">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="avatar placeholder">
              <div className="bg-neutral-100 text-neutral-content rounded-full w-20 justify-center items-center flex">
                <BookOpen className="text-red-600 "
                 size={40} />
              </div>
            </div>
          </div>
            {/* Title and Subtitle */}
            <h1 className="text-5xl text-red-700 font-extrabold mb-4">Welcome to Library Manager</h1>
            <p className="text-lg text-gray-600 ">Your gateway to a world of books</p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                    onClick={() => Navigate("/register")}
                     className="btn bg-red-500 btn-lg rounded-full px-8 hover:bg-red-800">
                      
                    Get Started
                    <ArrowRight size={20} />
                </button>
                <button
                    onClick={() => Navigate("/login")}
                    className="btn btn-outline btn-lg rounded-full px-8 items-center gap-2 bg-orange-600 hover:bg-amber-800"
                    >
                    <LogIn size={20} />
                    Sign In
                </button>
            </div>
        </div>

        {/* Feature Cards */}
        <div className=" flex flex-col-reverse  gap-8 w-3xl max-w-6xl mt-16">
            <div className=" bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                {/* Book Management */}
                <div className="card bg-blue-100 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="card-body items-center text-center">
                       <div className="avatar placeholder mb-4">
                           <div className="bg-red-200 text-info rounded-full w-16 flex justify-center items-center">
                                 <BookOpen className="text-red-700"
                                  size={32} />
                            </div>
                          </div>
                        <h3 className="card-title text-red-400">Book Management</h3>
                        <p>Easily add, update, and track your book inventory.</p>
                    </div>
                </div>
                <br/>
            {/* Member Management */}
            <div className="card bg-red-200 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center ">
                    <div className="avatar placeholder mb-4">
                        <div className="bg-info/10 text-info rounded-full w-16 flex justify-center items-center ">
                            <Users size={32} />
                        </div>
                    </div>
                    <h3 className="card-title text-blue-600">Member Management</h3>
                    <p>Keep track of member information and borrowing history.</p>
                </div>
            </div>
            <br/>

            {/* Analytics */}
            <div className="card bg-green-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                    <div className="avatar placeholder mb-4">
                        <div className="bg-secondary/10 text-secondary rounded-full w-16 flex justify-center items-center">
                            <TrendingUp size={32} />
                        </div>
                    </div>
                    <h3 className="card-title text-pink-600">Analytics</h3>
                    <p className="text-base-content/70">Gain insights into library usage and popular books.</p>
                </div>
            </div>
            <br/>

            {/* Secure Access */}
            <div className="card bg-pink-100 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="card-body items-center text-center">
                    <div className="avatar placeholder mb-4">
                        <div className="bg-success/10 text-success rounded-full w-16 flex justify-center items-center">
                            <Shield size={32} />
                        </div>
                    </div>
                    <h3 className="card-title text-green-600">Secure Access</h3>
                    <p>Role-based access control to protect sensitive data.</p>
                </div>
            </div>
            </div>
        </div>
         
        <br/>
        <Footer />

          </div>
        </>
    )
}  